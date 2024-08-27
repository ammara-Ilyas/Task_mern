import express from "express";
import { createWill } from "../controllers/will.js";

const router = express.Router();

router.post("/will", createWill);

export default router;
