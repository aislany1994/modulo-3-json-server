const express = require("express");
const { response } = require("express");
const { uuid } = require("uuidv4"); //id unico

const app = express();
app.use(express.json());
const servicos = [];
const reservas = [];
const localizacao = [];

//servicos
app.get("/servicos", (request, response) => {
  return response.json(servicos);
}); //visualizar

app.post("/servicos", (request, response) => {
  const { nome, comodidades, avaliacao } = request.body;
  const funcionamento = { id: uuid(), nome, comodidades, avaliacao };
  servicos.push(funcionamento);
  return response.status(201).json(funcionamento);
}); //inserir

app.put("/servicos/:id", (request, response) => {
  const { id } = request.params;
  const { nome, comodidades, avaliacao } = request.body;
  const newservicos = { id, nome, comodidades, avaliacao };
  const funcionamentoindex = servicos.findIndex(
    (funcionamento) => funcionamento.id == id
  );
  servicos[funcionamentoindex] = newservicos;
  return response.json(newservicos);
}); //put atualiza os dados

app.delete("/servicos/:id", (request, response) => {
  const { id } = request.params;
  const funcionamentoindex = servicos.findIndex(
    (funcionamento) => funcionamento.id == id
  );
  servicos.splice(fucionamentoindex, 1);
  return response.status(204).send();
}); //delete apaga

//Reservas
app.get("/reservas", (request, response) => {
  return response.json(reservas);
}); //visualizar

app.post("/reservas", (request, response) => {
  const { diarias, entradaesaida } = request.body;
  const funcionamento = { id: uuid(), diarias, entradaesaida };
  reservas.push(funcionamento);
  return response.status(201).json(funcionamento);
}); //inserir

app.put("/reservas/:id", (request, response) => {
  const { id } = request.params;
  const { diarias, entradaesaida } = request.body;
  const newreservas = { id, diarias, entradaesaida };
  const funcionamentoindex = reservas.findIndex(
    (funcionamento) => funcionamento.id == id
  );
  reservas[funcionamentoindex] = newreservas;
  return response.json(newreservas);
}); //put atualiza os dados

app.delete("/reservas/:id", (request, response) => {
  const { id } = request.params;
  const funcionamentoindex = reservas.findIndex(
    (funcionamento) => funcionamento.id == id
  );
  reservas.splice(funcionamentoindex, 1);
  return response.status(204).send();
}); //delete apaga

//Localização
app.get("/localizacao", (request, response) => {
  return response.json(localizacao);
}); //visualizar

app.post("/localizacao", (request, response) => {
  const { bairro, endereco } = request.body;
  const funcionamento = { id: uuid(), bairro, endereco };
  localizacao.push(funcionamento);
  return response.status(201).json(funcionamento);
}); //inserir

app.put("/localizacao/:id", (request, response) => {
  const { id } = request.params;
  const { bairro, endereco } = request.body;
  const newlocalizacao = { id, bairro, endereco };
  const funcionamentoindex = localizacao.findIndex(
    (funcionamento) => funcionamento.id == id
  );
  localizacao[funcionamentoindex] = newlocalizacao;
  return response.json(newlocalizacao);
}); //put atualiza os dados

app.delete("/localizacao/:id", (request, response) => {
  const { id } = request.params;
  const funcionamentoindex = localizacao.findIndex(
    (funcionamento) => funcionamento.id == id
  );
  localizacao.splice(funcionamentoindex, 1);
  return response.status(204).send();
}); //delete apaga

app.listen(8181, () => {
  console.log("o servidor foi iniciado!");
});
