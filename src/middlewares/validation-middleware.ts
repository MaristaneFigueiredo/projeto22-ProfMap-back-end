import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ObjectSchema } from 'joi';
//import { invalidDataError } from "@/errors";
import { invalidDataError } from '../errors';

export function validateBody(schema: ObjectSchema): ValidationMiddleware {
  return validate(schema, 'body');
}

export function validateParams(schema: ObjectSchema): ValidationMiddleware {
  return validate(schema, 'params');
}

function validate(schema: ObjectSchema, type: 'body' | 'params') {
  return (request: Request, response: Response, next: NextFunction) => {
    const { error } = schema.validate(request[type], {
      abortEarly: false,
    });

    if (!error) {
      next();
    } else {
      response
        .status(httpStatus.BAD_REQUEST)
        .send(invalidDataError(error.details.map((d) => d.message)));
    }
  };
}

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
