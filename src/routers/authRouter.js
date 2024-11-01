import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

const authRouter = Router();

authRouter.post("/register", validateRegisterInput, register);
authRouter.post("/login", validateLoginInput, login);
authRouter.get("/logout", logout);

export default authRouter;
