import express from "express";
import cors from "cors";
import dbConnect from "./config/mongo";
import { router } from "./routes";
import "dotenv/config";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
dbConnect();
app.listen(PORT, () => console.log(`Escuchando el puerto ${PORT}`));
