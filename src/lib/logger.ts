export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

const isProduction = process.env.NODE_ENV === 'production';

class Logger {
    private formatMessage(level: LogLevel, message: string, meta?: any) {
        const timestamp = new Date().toISOString();

        if (isProduction) {
            // JSON logging for production (CloudWatch, Datadog, etc.)
            return JSON.stringify({
                timestamp,
                level,
                message,
                ...meta
            });
        }

        // Pretty printing for development
        return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
    }

    debug(message: string, meta?: any) {
        if (!isProduction) {
            console.debug(this.formatMessage('debug', message), meta || '');
        }
    }

    info(message: string, meta?: any) {
        console.log(this.formatMessage('info', message), meta || '');
    }

    warn(message: string, meta?: any) {
        console.warn(this.formatMessage('warn', message), meta || '');
    }

    error(message: string, error?: any) {
        const meta = error instanceof Error ? { stack: error.stack, error: error.message } : { error };
        console.error(this.formatMessage('error', message), meta);
    }
}

export const logger = new Logger();
