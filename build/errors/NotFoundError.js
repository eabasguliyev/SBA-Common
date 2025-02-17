"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const CustomError_1 = require("./CustomError");
const ErrorCode_1 = require("./ErrorCode");
class NotFoundError extends CustomError_1.CustomError {
    constructor(error) {
        super(error ? error : "Not Found!");
        this.error = error;
        this.statusCode = ErrorCode_1.StatusCode.ContentNotFound;
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
exports.NotFoundError = NotFoundError;
