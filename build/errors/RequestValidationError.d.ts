import { CustomError, ErrorItem } from "./CustomError";
import { StatusCode } from "./ErrorCode";
export declare class RequestValidationError extends CustomError {
    protected errors: ErrorItem[];
    statusCode: StatusCode;
    constructor(errors: ErrorItem[]);
    serializeErrors(): {
        message: string;
        path: any;
    }[];
}
