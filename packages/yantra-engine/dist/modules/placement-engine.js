"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlacementEngine = void 0;
class PlacementEngine {
    static getPlacementGuide(dsl) {
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
exports.PlacementEngine = PlacementEngine;
