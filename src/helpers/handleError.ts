import { BadRequestError } from "../errors/BadRequestError";
import { CustomError } from "../errors/CustomError";
import { StatusCode } from "../errors/ErrorCode";
import { NotFoundError } from "../errors/NotFoundError";

export function handleError(error: Error | string | unknown) {
  if (error instanceof CustomError) {
    switch (error.statusCode) {
      case StatusCode.BadRequestError:
        throw new BadRequestError(error);
      case StatusCode.ContentNotFound:
        throw new NotFoundError(error as unknown as string);
    }
  } else if (error instanceof Error) {
    throw new Error(error!.stack);
  }
}
