import { Router } from "express";

import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoute = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRoute.post("/sessions", authenticateUserController.handle);

export { authenticateRoute };
