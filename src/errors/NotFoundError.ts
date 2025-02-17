import { CustomError, ErrorItem } from "./CustomError";
import { StatusCode } from "./ErrorCode";

export class NotFoundError extends CustomError {
  statusCode = StatusCode.ContentNotFound;

  constructor(protected error?: string) {
    super(error ? error : "Not Found!");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
