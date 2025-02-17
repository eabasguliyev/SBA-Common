import { BadRequestError } from "../errors/BadRequestError";
import { CustomError } from "../errors/CustomError";
import { StatusCode } from "../errors/ErrorCode";
import { GRPCError } from "../errors/GRPCError";
import { InternalServerError } from "../errors/InternalServerError";
import { NotFoundError } from "../errors/NotFoundError";

export function handleError(error: Error | string | unknown) {
  if (error instanceof CustomError) {
    switch (error.statusCode) {
      case StatusCode.BadRequestError:
        throw new BadRequestError(error);
      case StatusCode.ContentNotFound:
        throw new NotFoundError(error as unknown as string);
      case StatusCode.InternalServerError:
        throw error instanceof GRPCError
          ? new GRPCError(error.message)
          : new InternalServerError(error.message);
    }
  } else {
    throw new Error((error as Error).stack);
  }
}
