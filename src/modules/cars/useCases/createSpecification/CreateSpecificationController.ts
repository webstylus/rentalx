import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const createSpecificationService = this.createSpecificationUseCase;
    createSpecificationService.execute({
      name,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
