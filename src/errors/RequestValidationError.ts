import { CustomError, ErrorItem } from "./CustomError";
import { StatusCode } from "./ErrorCode";

export class RequestValidationError extends CustomError {
  statusCode = StatusCode.BadRequestError;

  constructor(protected errors: ErrorItem[]) {
    super("Invalid request parameters");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.message,
      path: error.path,
    }));
  }
}
