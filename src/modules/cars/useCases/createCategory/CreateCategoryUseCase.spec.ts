import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategorUseCase: CreateCategoryUseCase;
let categoiesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create Category", () => {
  beforeEach(() => {
    categoiesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategorUseCase = new CreateCategoryUseCase(
      categoiesRepositoryInMemory
    );
  });

  it("should be able to create a new category", async () => {
    const categroy = {
      name: "Create Test",
      description: "Category description Test",
    };
    await createCategorUseCase.execute({
      name: categroy.name,
      description: categroy.description,
    });

    const categoryCreated = await categoiesRepositoryInMemory.findByName(
      categroy.name
    );

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      const categroy = {
        name: "Create Test",
        description: "Category description Test",
      };
      await createCategorUseCase.execute({
        name: categroy.name,
        description: categroy.description,
      });

      await createCategorUseCase.execute({
        name: categroy.name,
        description: categroy.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
