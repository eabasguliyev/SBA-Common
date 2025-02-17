import { CustomError } from "./CustomError";
import { StatusCode } from "./ErrorCode";

export class BadRequestError extends CustomError {
  statusCode = StatusCode.BadRequestError;

  constructor(protected error?: string | any) {
    super(typeof error === "string" ? error : error.message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
