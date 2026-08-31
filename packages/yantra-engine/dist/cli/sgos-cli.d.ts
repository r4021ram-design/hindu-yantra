export declare class SGOSCLI {
    private static pm;
    static runCommand(args: readonly string[]): string;
    static run(args: readonly string[]): string;
    private static handleCompile;
    private static handleSolve;
    private static handleBenchmark;
    private static handleRunPipeline;
    private static handlePackageManager;
    private static resolveDSL;
    private static getHelpText;
}
