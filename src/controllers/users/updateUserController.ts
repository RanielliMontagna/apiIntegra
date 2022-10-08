import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";
import { required } from "../../utils/validations/required";

export const updateUserController = async (req: Request, res: Response) => {
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
};
