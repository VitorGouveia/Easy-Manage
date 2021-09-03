import { RefreshUserTokenUseCase } from "./RefreshUserTokenUseCase"
import { RefreshUserTokenController } from "./RefreshUserTokenController"

import { PrismasRefreshTokenRepository } from "@user/repositories/drivers/prisma"
import { AccessTokenProvider, RefreshTokenProvider } from "@user/providers"

import { prisma } from "@infra/prisma"

const refreshTokenRepository = new PrismasRefreshTokenRepository(prisma)
const accessTokenProvider = new AccessTokenProvider()
const refreshTokenProvider = new RefreshTokenProvider(refreshTokenRepository)

const refreshUserTokenUseCase = new RefreshUserTokenUseCase(
  refreshTokenRepository,
  accessTokenProvider,
  refreshTokenProvider
)
const refreshUserTokenController = new RefreshUserTokenController(
  refreshUserTokenUseCase
)

export { refreshUserTokenController }
