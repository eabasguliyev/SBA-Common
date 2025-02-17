"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const BadRequestError_1 = require("../errors/BadRequestError");
const CustomError_1 = require("../errors/CustomError");
const ErrorCode_1 = require("../errors/ErrorCode");
const NotFoundError_1 = require("../errors/NotFoundError");
function handleError(error) {
    if (error instanceof CustomError_1.CustomError) {
        switch (error.statusCode) {
            case ErrorCode_1.StatusCode.BadRequestError:
                throw new BadRequestError_1.BadRequestError(error);
            case ErrorCode_1.StatusCode.ContentNotFound:
                throw new NotFoundError_1.NotFoundError(error);
        }
    }
    else if (error instanceof Error) {
        throw new Error(error.stack);
    }
}
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map