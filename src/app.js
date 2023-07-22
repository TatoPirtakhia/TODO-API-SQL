import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import todoRouter from "./routes/todo-routers.js";
import swaggerMiddleware from "./middlewares/swager-middlewares.js";
import cors from "cors";
const app = express();
dotenv.config();

app.use(bodyParser.json());

app.use(cors());

app.use("/api", cors(), todoRouter);

app.use("/", ...swaggerMiddleware());

app.listen(process.env.PORT || 3001);
