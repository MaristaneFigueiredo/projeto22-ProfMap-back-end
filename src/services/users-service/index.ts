import { users } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import usersRepository from '@/repositories/users-repository';
import sessionsService from '../sessions-service';
import { EmailAlreadyExists, AccessDenied } from './errors';

export type CreateUserParams = Pick<users, 'name' | 'email' | 'password'>;
export type CreateAuthParams = Pick<users, 'password' | 'email'>;
export type UserData = Pick<users, 'id' | 'name' | 'email'>;

async function createUser({
  name,
  email,
  password,
}: CreateUserParams): Promise<users> {
  //console.log('env =', process.env.DATABASE_URL);

  await verifyIsEmailUnique(email);
  const hashedPassword = await bcrypt.hash(password, 12);

  return await usersRepository.createUser({
    name,
    email,
    password: hashedPassword,
  });
}

async function verifyIsEmailUnique(email: string) {
  const userSameEmailFound = await usersRepository.findUserByEmail(email);
  if (userSameEmailFound) {
    throw EmailAlreadyExists();
  }
}

async function findUserByEmail(email: string) {
  return await usersRepository.findUserByEmail(email);
}

async function validateCredentialsAndGetToken({
  email,
  password,
}: CreateAuthParams) {
  const userExists = await findUserByEmail(email);

  if (!userExists) {
    throw AccessDenied();
  }

  const isPasswordvalid = await bcrypt.compare(password, userExists.password);

  if (!isPasswordvalid) {
    throw AccessDenied();
  }

  const user = {
    id: userExists.id,
    name: userExists.name,
    email: userExists.email,
  };

  const session = await createSession(user);
  return session.token;
}

async function createSession(user: UserData) {
  const token = jwt.sign({ ...user }, process.env.JWT_SECRET);
  return await sessionsService.createSession({ token, user_id: user.id });
}

const userService = {
  createUser,
  validateCredentialsAndGetToken,
};

export default userService;
