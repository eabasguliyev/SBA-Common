import { CustomError } from "./CustomError";
import { StatusCode } from "./ErrorCode";
export declare class BadRequestError extends CustomError {
    protected error?: any;
    statusCode: StatusCode;
    constructor(error?: any);
    serializeErrors(): {
        message: string;
    }[];
}
