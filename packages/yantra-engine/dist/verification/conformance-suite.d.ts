import { SGOSPlugin } from '../sdk/types';
import { PluginConformanceReport } from './types';
export declare class SGOSPluginConformanceSuite {
    /**
     * Validates third-party plugins against SGOS Platform Conformance Rules.
     */
    static testPlugin(plugin: SGOSPlugin): PluginConformanceReport;
}
