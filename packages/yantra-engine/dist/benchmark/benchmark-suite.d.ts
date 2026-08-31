export interface StageBenchmarkResult {
    stage: 'Compile' | 'Solve' | 'Verify' | 'Render' | 'Export';
    latencyMs: number;
    opsPerSecond: number;
    memoryAllocatedBytes: number;
    status: 'BENCHMARK_PASSED';
}
export interface BenchmarkSuiteReport {
    engineVersion: string;
    kernelLockStatus: string;
    benchmarkTimestamp: string;
    totalStagesEvaluated: number;
    totalPipelineLatencyMs: number;
    stageResults: StageBenchmarkResult[];
}
export declare class SGOSPerformanceBenchmarkSuite {
    /**
     * Executes reproducible performance benchmarks across all 5 pipeline stages.
     */
    static runBenchmarks(iterations?: number): BenchmarkSuiteReport;
}
