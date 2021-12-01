import express from "express";
import swaggerUI from "swagger-ui-express";

import "./database";
import { router } from "./routes";
import swaggerJson from "./swagger.json";

const app = express();
const options = {
  customCssUrl: "./assets/css/swagger/theme-monokai.css",
};

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJson, options));
app.use(router);

app.listen(3333);
