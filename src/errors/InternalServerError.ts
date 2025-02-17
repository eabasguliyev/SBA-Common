import { CustomError } from "./CustomError";
import { StatusCode } from "./ErrorCode";

export class InternalServerError extends CustomError {
  statusCode = StatusCode.InternalServerError;

  constructor(protected error?: string | any) {
    super(typeof error !== "string" ? error.message : "Something went wrong");

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
