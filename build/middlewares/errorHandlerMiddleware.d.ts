import { Request, Response, NextFunction } from "express";
export declare const errorHandlerMiddleware: (err: Error, req: Request, res: Response, next: NextFunction) => void;
