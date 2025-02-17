"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestQueryMiddleware = exports.validateRequestParamsMiddleware = exports.validateRequestBodyMiddleware = void 0;
const RequestValidationError_1 = require("../errors/RequestValidationError");
const validateRequestBodyMiddleware = (validatorSchema) => (req, res, next) => {
    var _a;
    try {
        const { value, error } = validatorSchema.validate(req.body, {
            abortEarly: false,
        });
        if ((_a = error === null || error === void 0 ? void 0 : error.details) === null || _a === void 0 ? void 0 : _a.length) {
            throw new RequestValidationError_1.RequestValidationError(error.details);
        }
        req.body = value;
        next();
    }
    catch (error) {
        throw error;
    }
};
exports.validateRequestBodyMiddleware = validateRequestBodyMiddleware;
const validateRequestParamsMiddleware = (validatorSchema) => (req, res, next) => {
    var _a;
    try {
        const { value, error } = validatorSchema.validate(req.params, {
            abortEarly: false,
        });
        if ((_a = error === null || error === void 0 ? void 0 : error.details) === null || _a === void 0 ? void 0 : _a.length) {
            throw new RequestValidationError_1.RequestValidationError(error.details);
        }
        req.params = value;
        next();
    }
    catch (error) {
        throw error;
    }
};
exports.validateRequestParamsMiddleware = validateRequestParamsMiddleware;
const validateRequestQueryMiddleware = (validatorSchema) => (req, res, next) => {
    var _a;
    try {
        const { value, error } = validatorSchema.validate(req.query, {
            abortEarly: false,
        });
        if ((_a = error === null || error === void 0 ? void 0 : error.details) === null || _a === void 0 ? void 0 : _a.length) {
            throw new RequestValidationError_1.RequestValidationError(error.details);
        }
        req.query = value;
        next();
    }
    catch (error) {
        throw error;
    }
};
exports.validateRequestQueryMiddleware = validateRequestQueryMiddleware;
