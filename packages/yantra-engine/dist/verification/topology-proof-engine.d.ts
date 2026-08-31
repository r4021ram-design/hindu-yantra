import { GeometryDSL } from '../compiler/types';
export interface TopologyProofReport {
    dslId: string;
    isPlanarGraph: boolean;
    verticesCount: number;
    edgesCount: number;
    facesCount: number;
    eulerCharacteristic: number;
    eulerEquationValid: boolean;
    edgeSharingVerified: boolean;
    regionClosureVerified: boolean;
    windingOrderEnforced: 'CCW';
    topologyStatus: 'TOPOLOGICALLY_PROVED';
}
export declare class SGOSTopologyProofEngine {
    /**
     * Proves planar graph topology, Euler Characteristic V - E + F, edge sharing, and CCW winding order.
     */
    static proveTopology(dsl: GeometryDSL): TopologyProofReport;
}
