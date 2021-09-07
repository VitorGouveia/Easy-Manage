import { SearchClientUseCase } from "./SearchClientUseCase"
import { SearchClientController } from "./SearchClientController"

import { AccessTokenProvider } from "@user/providers"
import { PrismaClientRepository } from "@client/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const accessTokenProvider = new AccessTokenProvider()
const clientRepository = new PrismaClientRepository(prisma)

const searchClientUseCase = new SearchClientUseCase(
  clientRepository,
  accessTokenProvider
)
export const searchClientController = new SearchClientController(
  searchClientUseCase
)
