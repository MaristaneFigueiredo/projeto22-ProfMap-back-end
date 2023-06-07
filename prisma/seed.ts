import { PrismaClient } from '@prisma/client';

import prisma from '../src/config/database';

async function main() {}
main()
  .then(() => {
    console.log('Seed done with success!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
    // como estamos abrindo um processo separado no node para fazer essa execução, é importante encerrar o processo se tiver um erro
  })
  .finally(async () => {
    prisma.$disconnect();
    // Ela é função assincrona, pois preciso acessar a função desconectar do banco do prisma
  });
