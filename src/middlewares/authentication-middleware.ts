import { NextFunction, Request, Response } from 'express';
//import { unauthorizedError } from "@/errors/unauthorizedError";
import { unauthorizedError } from '../errors';
import sessionsService from '@/services/sessions-service';
import * as jwt from 'jsonwebtoken';

export async function authenticateToken(
  request: AuthenticatedRequest,
  response: Response,
  next: NextFunction
) {
  const authorizationHeader = request.header('Authorization');
  if (!authorizationHeader) throw unauthorizedError();

  const token = authorizationHeader.split(' ')[1];
  if (!token) throw unauthorizedError();

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
    if (!user) throw unauthorizedError();

    const session = await sessionsService.findSessionByToken(token);

    if (!session) throw unauthorizedError();

    request.userId = user.userId;
    request.name = user.name;
    request.email = user.email;
    next();
  } catch (error) {
    next(error);
  }
}

export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
  name: string;
  email: string;
};
