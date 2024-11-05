import { Router } from "express";
import { login } from "../controllers/auth/login";
import { signup } from "../controllers/auth/signup";
import { validateLogin } from "../validators/login-validators";
import { validateSignup } from "../validators/signup-validators";

const authRouter = Router();

authRouter.post("/login", validateLogin, login);
authRouter.post("/signup", validateSignup, signup);

export default authRouter;
