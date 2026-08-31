export type AISuggestionCategory =
  | 'citation'
  | 'translation'
  | 'cross_link'
  | 'metadata'
  | 'draft'
  | 'timeline'
  | 'glossary';

export type HumanReviewStatus = 'Pending' | 'Approved' | 'Rejected';

export interface AIProvenanceMetadata {
  generatedAt: string;
  generatedByModel: string;
  modelVersion: string;
  promptVersion: string;
  reviewStatus: HumanReviewStatus;
  reviewedBy?: string;
  reviewedAt?: string;
}

export interface AISuggestion {
  id: string;
  category: AISuggestionCategory;
  targetYantraId: string;
  suggestedContent: string;
  aiConfidenceScore: number; // 0.0 to 1.0
  editorialVerificationStatus: 'Unverified' | 'Verified' | 'Disputed';
  evidenceAvailability: 'Available' | 'Partial' | 'No supporting citation found.';
  provenance: AIProvenanceMetadata;
  sourceReferences?: string[];
}

export class AIAuthoringAssistantEngine {
  /**
   * Generate a categorized AI suggestion with strict provenance & mandatory pending review status
   */
  public static generateSuggestion(
    category: AISuggestionCategory,
    yantraId: string,
    promptContext: string,
    hasVerifiedReference: boolean = true
  ): AISuggestion {
    const timestamp = new Date().toISOString();
    let content = `AI Draft for ${yantraId}: ${promptContext}`;
    let evidenceAvailability: 'Available' | 'Partial' | 'No supporting citation found.' = 'Available';

    if (category === 'citation') {
      if (!hasVerifiedReference) {
        content = 'No supporting citation found.';
        evidenceAvailability = 'No supporting citation found.';
      } else {
        content = 'Soundarya Lahari Verse 11: चतुर्भिः श्रीकण्ठैः शिवयुवतिभिः पञ्चभिरपि...';
      }
    } else if (category === 'translation') {
      content = 'IAST: Śrī Cakra Yantram | Hindi: श्री यन्त्र';
    } else if (category === 'cross_link') {
      content = 'Suggested Related Yantras: maha_meru, mahalakshmi_yantra';
    }

    return {
      id: `sug_${category}_${Math.random().toString(36).substring(2, 9)}`,
      category,
      targetYantraId: yantraId,
      suggestedContent: content,
      aiConfidenceScore: hasVerifiedReference ? 0.95 : 0.40,
      editorialVerificationStatus: 'Unverified',
      evidenceAvailability,
      provenance: {
        generatedAt: timestamp,
        generatedByModel: 'SGKB-Scholar-AI',
        modelVersion: 'v2.4-academic',
        promptVersion: 'p1.2-canonical',
        reviewStatus: 'Pending'
      },
      sourceReferences: hasVerifiedReference ? ['Soundarya Lahari 11', 'Yogini Hridaya 1.14'] : []
    };
  }

  /**
   * Process Human Review decision (Approve or Reject)
   */
  public static processHumanReview(suggestion: AISuggestion, action: 'Approved' | 'Rejected', reviewer: string): AISuggestion {
    return {
      ...suggestion,
      editorialVerificationStatus: action === 'Approved' ? 'Verified' : 'Disputed',
      provenance: {
        ...suggestion.provenance,
        reviewStatus: action,
        reviewedBy: reviewer,
        reviewedAt: new Date().toISOString()
      }
    };
  }
}
