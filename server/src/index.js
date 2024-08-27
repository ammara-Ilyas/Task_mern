import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "../route/route.js";
import { handlerDbConnection } from "./db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const url = process.env.MONGO_URI;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/api", router);

handlerDbConnection(url);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
