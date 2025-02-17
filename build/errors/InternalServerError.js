"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalServerError = void 0;
const CustomError_1 = require("./CustomError");
const ErrorCode_1 = require("./ErrorCode");
class InternalServerError extends CustomError_1.CustomError {
    constructor(error) {
        super(typeof error !== "string" ? error.message : "Something went wrong");
        this.error = error;
        this.statusCode = ErrorCode_1.StatusCode.InternalServerError;
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.InternalServerError = InternalServerError;
