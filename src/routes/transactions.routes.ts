import { Router } from "express";
import { createTransactionsController } from "../controllers/transactions/createTransactionsController";
import { listTransactionsController } from "../controllers/transactions/listTransactionsController";

const transactionsRoutes = Router();

// Rota para listar todas as transações
transactionsRoutes.get("/", listTransactionsController);

// Rota para criar uma transação
transactionsRoutes.post("/create", createTransactionsController);

export { transactionsRoutes };
