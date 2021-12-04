import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

class IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export { IUserRepository };
