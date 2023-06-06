import express, { json } from 'express';

const app = express(); //Essa constante app representa o meu aplicativo Express e é usada para definir as rotas, configurar middlewares, iniciar o servidor e muito mais. Uma nova instância de um aplicativo significa criar um objeto único que representa um aplicativo específico.
app.use(json);

app.get('/exemplo', (req, res) => {
  res.send('Funcionando?!');
});

export default app;

//O pacote "express" não exporta a função json() como parte do objeto padrão do "express" porque a função json() é um middleware específico para análise do corpo das solicitações HTTP como JSON. Isso mantém o pacote principal "express" mais leve e flexível
//Um middleware(intermediário) é uma função que recebe a requisição (request), a resposta (response) e a próxima função a ser executada no ciclo de solicitação-resposta. Ele permite realizar tarefas intermediárias antes de chegar à rota final da aplicação.
//No Express, os middlewares são usados para adicionar funcionalidades extras ao processamento das requisições. Eles podem realizar diversas tarefas, como autenticação, validação de dados, manipulação do corpo da requisição, registro de logs, entre outras.

//Essa função de callback, por sua vez, é uma função que você define e que recebe dois parâmetros: o objeto req (representando a requisição) e o objeto res (representando a resposta). É dentro dessa função que você escreve a lógica para lidar com a solicitação e enviar a resposta ao cliente.
