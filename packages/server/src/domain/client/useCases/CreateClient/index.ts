import { CreateClientUseCase } from "./CreateClientUseCase"
import { CreateClientController } from "./CreateClientController"

import { PrismaClientRepository } from "@client/repositories/drivers/prisma"
import { PrismaUserRepository } from "@user/repositories/drivers/prisma"
import { AccessTokenProvider } from "@user/providers"

import { prisma } from "@infra/prisma"

const userRepository = new PrismaUserRepository(prisma)
const clientRepository = new PrismaClientRepository(prisma)
const accessTokenProvider = new AccessTokenProvider()

const createClientUseCase = new CreateClientUseCase(
  clientRepository,
  userRepository,
  accessTokenProvider
)

const createClientController = new CreateClientController(createClientUseCase)

export { createClientController }
