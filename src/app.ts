import express, { json, Request, Response, Express } from 'express';
import cors from 'cors';
import { usersRoutes } from '@/routes';
import { handleApplicationErrors } from '@/middlewares';
import { loadEnv } from './config/envs';
import { connectDb, disconnectDb } from '@/config/database';
import httpStatus from 'http-status';

const app = express(); //Essa constante app representa o meu aplicativo Express e é usada para definir as rotas, configurar middlewares, iniciar o servidor e muito mais. Uma nova instância de um aplicativo significa criar um objeto único que representa um aplicativo específico.
app.use(json());
app.use(cors());

app.get('/health', (request: Request, response: Response) =>
  response.sendStatus(httpStatus.OK)
);
app.use('/users', usersRoutes);

app.use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDb();
}

export default app;

//O pacote "express" não exporta a função json() como parte do objeto padrão do "express" porque a função json() é um middleware específico para análise do corpo das solicitações HTTP como JSON. Isso mantém o pacote principal "express" mais leve e flexível
//Um middleware(intermediário) é uma função que recebe a requisição (request), a resposta (response) e a próxima função a ser executada no ciclo de solicitação-resposta. Ele permite realizar tarefas intermediárias antes de chegar à rota final da aplicação.
//No Express, os middlewares são usados para adicionar funcionalidades extras ao processamento das requisições. Eles podem realizar diversas tarefas, como autenticação, validação de dados, manipulação do corpo da requisição, registro de logs, entre outras.
