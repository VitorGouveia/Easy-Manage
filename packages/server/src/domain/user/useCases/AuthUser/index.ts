import { AuthUserUseCase } from "./AuthUserUseCase"
import { AuthUserController } from "./AuthUserController"

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

const authUserUseCase = new AuthUserUseCase(
  usersRepository,
  refreshTokenRepository,
  refreshTokenProvider,
  accessTokenProvider,
  user
)
const authUserController = new AuthUserController(authUserUseCase)

export { authUserController }
