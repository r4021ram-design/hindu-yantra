import { YantraDSL } from '../types/dsl';

export interface PlacementGuide {
  direction: string;
  degreesHeading: number;
  recommendedRoom: string;
}

export class PlacementEngine {
  public static getPlacementGuide(dsl: YantraDSL): PlacementGuide {
    const dir = dsl.ritualPlacement?.recommendedDirection || 'North-East';
    const degrees = dsl.ritualPlacement?.facingDegrees || 45;
    const room = dsl.ritualPlacement?.placementGuidelines || 'Home Pooja Altar or Office Executive Desk facing North-East.';

    return {
      direction: dir,
      degreesHeading: degrees,
      recommendedRoom: room
    };
  }
}
