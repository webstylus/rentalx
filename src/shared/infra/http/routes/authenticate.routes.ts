import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { Router } from "express";

const authenticateRoute = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRoute.post("/sessions", authenticateUserController.handle);

export { authenticateRoute };
