import { Router } from "express";
import { loginController } from "../controllers/authentication/loginController";
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

export default routes;
