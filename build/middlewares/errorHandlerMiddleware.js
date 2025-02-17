"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandlerMiddleware = void 0;
const CustomError_1 = require("../errors/CustomError");
const errorHandlerMiddleware = (err, req, res, next) => {
    if (err instanceof CustomError_1.CustomError) {
        res.status(err.statusCode).send({ errors: err.serializeErrors() });
        return;
    }
    res.status(500).send({
        errors: [{ message: "Something went wrong" }],
    });
};
exports.errorHandlerMiddleware = errorHandlerMiddleware;
