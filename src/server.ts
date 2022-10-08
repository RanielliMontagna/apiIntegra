import express, { Request, Response } from "express";
import routes from "./routes/routes";

const app = express();

//Configução do express para receber requisições em JSON
app.use(express.json());

//Rotas
app.use(routes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
