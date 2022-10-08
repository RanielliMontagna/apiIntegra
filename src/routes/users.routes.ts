import { Router } from "express";
import { prismaClient } from "../database/prismaClient";
import { isNumber } from "../utils/validations/isNumber";
import { required } from "../utils/validations/required";

const usersRoutes = Router();

// Endpoint para buscar todos os usuários
usersRoutes.get("/", async (req, res) => {
  // Busca todos os usuários
  const usersList = await prismaClient.user.findMany();

  // Retorna a lista de usuários
  return res.json(usersList);
});

// Endpoint para criar um usuário
usersRoutes.post("/create", async (req, res) => {
  // Recebendo os dados do usuário
  const user = req.body;

  required(user.name, "name");
  required(user.email, "email");
  required(user.password, "password");

  // Salvando o usuário no banco de dados
  const createdUser = await prismaClient.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });

  // Retornando o usuário criado
  res.json(createdUser);
});

// Endpoint para editar um usuário
usersRoutes.put("/update", async (req, res) => {
  // Recebendo os dados do usuário
  const user = req.body;

  required(user.id, "id");

  // Atualizando o usuário no banco de dados
  const editedUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
    },
  });

  // Retornando o usuário editado
  res.json(editedUser);
});

// Endpoint para deletar um usuário
usersRoutes.delete("/delete", async (req, res) => {
  // Recebendo os dados do usuário
  const user = req.body;

  required(user.id, "id");

  // Deletando o usuário no banco de dados
  await prismaClient.user.delete({
    where: {
      id: user.id,
    },
  });

  res.send("Usuário deletado com sucesso!");
});

// Endpoint para buscar um usuário
usersRoutes.get("/findById/:id", async (req, res) => {
  // Recebendo o id do usuário
  const params = req.params;

  required(params.id, "id");
  isNumber(params.id, "id");

  // Buscando o usuário no banco de dados
  const user = await prismaClient.user.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // Retornando o usuário
  res.json(user);
});

export default usersRoutes;
