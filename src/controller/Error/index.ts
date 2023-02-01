import { NextFunction, Request, Response, } from 'express';

import HttpException from "../../exceptions/HttpException";

export const globalError = ((err: HttpException, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack)
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error'
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message
  });
}) 