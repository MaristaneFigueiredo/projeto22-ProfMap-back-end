import { prisma } from '@/config/database';
import { CreateUserParams } from '@/services/users-service';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';

async function createUser(data: CreateUserParams) {
  return prisma.users.create({
    data: {
      ...data,
      createdAt: new Date(dayjs().format('YYYY-MM-DD HH:mm:ss')),
    },
  });
}

async function findUserByEmail(email: string) {
  //console.log('email', email);
  return prisma.users.findFirst({
    where: {
      email,
    },
  });
}

const usersRepository = {
  createUser,
  findUserByEmail,
};

export default usersRepository;
