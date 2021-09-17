import { GetUserUseCase } from "./GetUserUseCase"
import { GetUserController } from "./GetUserController"

import { AccessTokenProvider } from "@user/providers"
import { PrismaUserRepository } from "@user/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const userRepository = new PrismaUserRepository(prisma)
const accessTokenProvider = new AccessTokenProvider()

const getUserUseCase = new GetUserUseCase(userRepository, accessTokenProvider)
export const getUserController = new GetUserController(getUserUseCase)
