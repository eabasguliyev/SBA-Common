import { NextFunction, Request, Response } from "express";
export declare const validateRequestBodyMiddleware: (validatorSchema: any) => (req: Request, res: Response, next: NextFunction) => void;
export declare const validateRequestParamsMiddleware: (validatorSchema: any) => (req: Request, res: Response, next: NextFunction) => void;
export declare const validateRequestQueryMiddleware: (validatorSchema: any) => (req: Request, res: Response, next: NextFunction) => void;
