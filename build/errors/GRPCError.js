"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRPCError = void 0;
const CustomError_1 = require("./CustomError");
const ErrorCode_1 = require("./ErrorCode");
class GRPCError extends CustomError_1.CustomError {
    constructor(error) {
        super(typeof error === "string"
            ? error
            : error.details
                ? error.details
                : error.message);
        this.error = error;
        this.statusCode = ErrorCode_1.StatusCode.InternalServerError;
        Object.setPrototypeOf(this, GRPCError.prototype);
    }
    serializeErrors() {
        return [
            {
                message: this.message,
            },
        ];
    }
}
exports.GRPCError = GRPCError;
