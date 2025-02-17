interface ErrorItem {
  message: string;
  path: any;
}

abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(protected error?: string | any) {
    super(typeof error ? error : JSON.stringify(error));

    Object.setPrototypeOf(this, CustomError.prototype);
    Error.captureStackTrace(this);
  }

  abstract serializeErrors(): Array<{
    message: string;
    field?: string | number | (string | number)[];
  }>;
}

export { CustomError, ErrorItem };
