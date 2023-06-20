import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApplicationError } from '@/protocols';

export function handleApplicationErrors(
  error: ApplicationError | Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  switch (error.name) {
    case 'EmailAlreadyExists':
      return response.status(httpStatus.CONFLICT).send(error);
    case 'AccessDenied':
      return response.status(httpStatus.FORBIDDEN).send(error);
    case 'unauthorizedError':
      return response.status(httpStatus.FORBIDDEN).send(error);
    default:
      return response.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: 'InternalServerError',
        message: 'Internal server error',
      });
  }
}
