"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(error) {
        super(typeof error ? error : JSON.stringify(error));
        this.error = error;
        Object.setPrototypeOf(this, CustomError.prototype);
        Error.captureStackTrace(this);
    }
}
exports.CustomError = CustomError;
