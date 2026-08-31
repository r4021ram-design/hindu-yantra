export type UserRole =
  | 'Viewer'
  | 'Student'
  | 'Researcher'
  | 'Translator'
  | 'Editor'
  | 'Publisher'
  | 'Administrator';

export type ContentStatus =
  | 'Draft'
  | 'Technical Review'
  | 'Editorial Review'
  | 'Scriptural Review'
  | 'Published Snapshot'
  | 'Archived';

export interface ScholarlyContentItem {
  id: string;
  type: 'scripture_excerpt' | 'commentary' | 'academic_ref' | 'geometry_explanation' | 'timeline_entry' | 'learning_lesson' | 'quiz_question' | 'glossary_entry';
  title: string;
  sanskritText?: string;
  iastText?: string;
  hindiTranslation?: string;
  englishTranslation?: string;
  gujaratiTranslation?: string;
  commentary?: string;
  evidenceTier: 'canonical' | 'traditional' | 'research';
  confidenceLevel: 'High' | 'Moderate' | 'Speculative';
  isDisputed: boolean;
  disputeRationale?: string;
  status: ContentStatus;
  version: number;
  author: string;
  lastUpdated: string;
  changeLog: {
    version: number;
    timestamp: string;
    editor: string;
    summary: string;
  }[];
}

export interface ImmutableSnapshot {
  snapshotId: string;
  yantraId: string;
  versionTag: string;
  publishedAt: string;
  publisher: string;
  contentItems: ScholarlyContentItem[];
  deterministicHash: string;
}

export class SGKBPublishingEngine {
  /**
   * Check if role has permission to execute action
   */
  public static hasPermission(role: UserRole, action: 'view' | 'draft' | 'translate' | 'review' | 'publish' | 'admin'): boolean {
    switch (role) {
      case 'Viewer':
      case 'Student':
        return action === 'view';
      case 'Researcher':
        return action === 'view' || action === 'draft';
      case 'Translator':
        return action === 'view' || action === 'translate';
      case 'Editor':
        return action === 'view' || action === 'draft' || action === 'translate' || action === 'review';
      case 'Publisher':
        return action === 'view' || action === 'review' || action === 'publish';
      case 'Administrator':
        return true;
      default:
        return false;
    }
  }

  /**
   * Transition content status safely according to editorial rules
   */
  public static transitionStatus(item: ScholarlyContentItem, targetStatus: ContentStatus, editor: string, notes: string): ScholarlyContentItem {
    const updated: ScholarlyContentItem = {
      ...item,
      status: targetStatus,
      version: item.version + 1,
      lastUpdated: new Date().toISOString(),
      changeLog: [
        ...item.changeLog,
        {
          version: item.version + 1,
          timestamp: new Date().toISOString(),
          editor,
          summary: `Transitioned from ${item.status} to ${targetStatus}. ${notes}`
        }
      ]
    };
    return updated;
  }

  /**
   * Create an Immutable Published Snapshot for consumption by the Digital Museum
   */
  public static createSnapshot(yantraId: string, items: ScholarlyContentItem[], publisher: string, versionTag: string): ImmutableSnapshot {
    const publishedOnly = items.filter(i => i.status === 'Published Snapshot' || i.status === 'Editorial Review');
    const timestamp = new Date().toISOString();
    const rawData = JSON.stringify({ yantraId, versionTag, publishedOnly });
    const deterministicHash = `sha256_${Math.abs(this.hashCode(rawData))}`;

    return {
      snapshotId: `snap_${yantraId}_${versionTag}`,
      yantraId,
      versionTag,
      publishedAt: timestamp,
      publisher,
      contentItems: publishedOnly,
      deterministicHash
    };
  }

  /**
   * Calculate side-by-side Version Diff between two snapshots
   */
  public static computeVersionDiff(oldSnap: ImmutableSnapshot, newSnap: ImmutableSnapshot) {
    const oldIds = new Set(oldSnap.contentItems.map(i => i.id));
    const newIds = new Set(newSnap.contentItems.map(i => i.id));

    const added = newSnap.contentItems.filter(i => !oldIds.has(i.id));
    const removed = oldSnap.contentItems.filter(i => !newIds.has(i.id));
    const modified = newSnap.contentItems.filter(i => {
      if (!oldIds.has(i.id)) return false;
      const oldItem = oldSnap.contentItems.find(o => o.id === i.id);
      return oldItem && (oldItem.version !== i.version || oldItem.englishTranslation !== i.englishTranslation || oldItem.evidenceTier !== i.evidenceTier);
    });

    return { added, removed, modified };
  }

  private static hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0;
    }
    return hash;
  }
}
