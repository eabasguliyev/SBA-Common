interface ErrorItem {
    message: string;
    path: any;
}
declare abstract class CustomError extends Error {
    protected error?: any;
    abstract statusCode: number;
    constructor(error?: any);
    abstract serializeErrors(): Array<{
        message: string;
        field?: string | number | (string | number)[];
    }>;
}
export { CustomError, ErrorItem };
