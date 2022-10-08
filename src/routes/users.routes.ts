import { Router } from "express";
import { prismaClient } from "../database/prismaClient";

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
usersRoutes.put("/update", (req, res) => {
  res.send("Atualizando usuário");
});

// Endpoint para deletar um usuário
usersRoutes.delete("/delete", (req, res) => {
  res.send("Deletando usuário");
});

// Endpoint para buscar um usuário
usersRoutes.get("/findById/:id", (req, res) => {
  res.send("Buscando usuário");
});

export default usersRoutes;
