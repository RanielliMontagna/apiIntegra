import { Router } from "express";
import { loginController } from "../controllers/authentication/loginController";
import { JwtMiddleware } from "../middlewares/jwt";

import { transactionsRoutes } from "./transactions.routes";
import usersRoutes from "./users.routes";

const routes = Router();

// Rota para ver se a api está funcionando
routes.get("/", (req, res) => {
  res.send("Hello!");
});

// Rota de login
routes.post("/login", loginController);

// Rotas de usuários
routes.use("/users", usersRoutes);

// Filtro de autenticação
routes.use(JwtMiddleware);

// Rotas de transações
routes.use("/transactions", transactionsRoutes);

export default routes;
