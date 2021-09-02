import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

import { User } from "@domain/user/entities"
import { PrismaUserRepository } from "@user/repositories/drivers/prisma"
import { AccessTokenProvider } from "@user/providers"

import { prisma } from "@infra/prisma"

const usersRepository = new PrismaUserRepository(prisma)

const accessTokenProvider = new AccessTokenProvider()

const user = new User(null)

const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  accessTokenProvider,
  user
)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
