import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoryRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  categoryRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
