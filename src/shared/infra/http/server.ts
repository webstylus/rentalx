import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import swaggerUI from "swagger-ui-express";
import "@shared/infra/typeorm";
import swaggerJson from "swagger.json";

import { AppError } from "@shared/errors/AppError";
import { router } from "@shared/infra/http/routes";

const app = express();
const options = {
  customCssUrl: "./assets/css/swagger/theme-monokai.css",
};

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJson, options));
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333);
