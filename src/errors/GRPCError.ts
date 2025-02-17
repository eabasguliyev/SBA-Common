import { CustomError } from "./CustomError";
import { StatusCode } from "./ErrorCode";

export class GRPCError extends CustomError {
  statusCode = StatusCode.InternalServerError;

  constructor(protected error?: string | any) {
    super(
      typeof error === "string"
        ? error
        : error.details
        ? error.details
        : error.message
    );

    Object.setPrototypeOf(this, GRPCError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
