import { CustomError } from "./CustomError";
import { StatusCode } from "./ErrorCode";
export declare class NotFoundError extends CustomError {
    protected error?: string | undefined;
    statusCode: StatusCode;
    constructor(error?: string | undefined);
    serializeErrors(): {
        message: string;
    }[];
}
