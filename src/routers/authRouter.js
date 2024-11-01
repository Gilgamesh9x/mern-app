import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateRegisterInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";
import rateLimiter from "express-rate-limit";

const authRouter = Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 6,
  message: { message: "IP rate limit exceeded, retry in 15 minutes." },
});

authRouter.post("/register", apiLimiter, validateRegisterInput, register);
authRouter.post("/login", apiLimiter, validateLoginInput, login);
authRouter.get("/logout", logout);

export default authRouter;
