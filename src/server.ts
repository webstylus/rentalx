import express from "express";
import swaggerUI from "swagger-ui-express";

// import { themeFlattop } from "./assets/css/swagger";
import { router } from "./routes";
import swaggerJson from "./swagger.json";

const app = express();
// const options = {
//   customCss: themeFlattop,
// };

app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJson));
app.use(router);

app.listen(3333);
