import type { ZodError } from 'zod';

export type ValidationIssue = {
    path: string;
    message: string;
};

function issuePathToString(path: PropertyKey[]): string {
    if (path.length === 0) {
        return 'body';
    }
    return path.map((segment) => String(segment)).join('.');
}

export function getValidationMessage(error: ZodError, fallback = 'Invalid request payload'): string {
    return error.issues[0]?.message ?? fallback;
}

export function getValidationDetails(error: ZodError): ValidationIssue[] {
    return error.issues.map((issue) => ({
        path: issuePathToString(issue.path),
        message: issue.message
    }));
}
