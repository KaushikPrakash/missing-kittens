"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
exports.globalError = (function (err, req, res, next) {
    console.log(err.stack);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    });
});
