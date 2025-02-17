"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestError = void 0;
const CustomError_1 = require("./CustomError");
const ErrorCode_1 = require("./ErrorCode");
class BadRequestError extends CustomError_1.CustomError {
    constructor(error) {
        super(typeof error === "string" ? error : error.message);
        this.error = error;
        this.statusCode = ErrorCode_1.StatusCode.BadRequestError;
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.BadRequestError = BadRequestError;
