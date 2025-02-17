import { NextFunction, Request, Response } from "express";
import { RequestValidationError } from "../errors/RequestValidationError";

export const validateRequestBodyMiddleware =
  (validatorSchema: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, error } = validatorSchema.validate(req.body, {
        abortEarly: false,
      });

      if (error?.details?.length) {
        throw new RequestValidationError(error.details);
      }

      req.body = value;

      next();
    } catch (error) {
      throw error;
    }
  };

export const validateRequestParamsMiddleware =
  (validatorSchema: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, error } = validatorSchema.validate(req.params, {
        abortEarly: false,
      });

      if (error?.details?.length) {
        throw new RequestValidationError(error.details);
      }

      req.params = value as any;
      next();
    } catch (error) {
      throw error;
    }
  };

export const validateRequestQueryMiddleware =
  (validatorSchema: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, error } = validatorSchema.validate(req.query, {
        abortEarly: false,
      });

      if (error?.details?.length) {
        throw new RequestValidationError(error.details);
      }

      req.query = value as any;

      next();
    } catch (error) {
      throw error;
    }
  };
