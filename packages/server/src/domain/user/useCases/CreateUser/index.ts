import { CreateUserUseCase } from "./CreateUserUseCase"
import { CreateUserController } from "./CreateUserController"

import { User } from "@domain/user/entities"
import {
  PrismaUserRepository,
  PrismasRefreshTokenRepository
} from "@user/repositories/drivers/prisma"
import { AccessTokenProvider, RefreshTokenProvider } from "@user/providers"

import { prisma } from "@infra/prisma"

const usersRepository = new PrismaUserRepository(prisma)
const refreshTokenRepository = new PrismasRefreshTokenRepository(prisma)

const accessTokenProvider = new AccessTokenProvider()
const refreshTokenProvider = new RefreshTokenProvider(refreshTokenRepository)

const user = new User(null)

const createUserUseCase = new CreateUserUseCase(
  usersRepository,
  refreshTokenRepository,
  accessTokenProvider,
  refreshTokenProvider,
  user
)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }
