import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

import { User } from "@domain/user/entities"

const user = new User(null)

const createUserUseCase = new CreateUserUseCase(user)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
