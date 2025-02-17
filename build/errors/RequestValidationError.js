"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const CustomError_1 = require("./CustomError");
const ErrorCode_1 = require("./ErrorCode");
class RequestValidationError extends CustomError_1.CustomError {
    constructor(errors) {
        super("Invalid request parameters");
        this.errors = errors;
        this.statusCode = ErrorCode_1.StatusCode.BadRequestError;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((error) => ({
            message: error.message,
            path: error.path,
        }));
    }
}
exports.RequestValidationError = RequestValidationError;
