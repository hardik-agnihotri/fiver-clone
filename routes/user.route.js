import express from "express";
import { getUser } from "../controllers/user.controller.js";
import jwtAuthentication from "../middleware/auth.middleware.js";

const router = express.Router();


router.get("/",jwtAuthentication ,getUser);

export default router;
