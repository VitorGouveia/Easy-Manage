import { ListClientUseCase } from "./ListClientUseCase"
import { ListClientController } from "./ListClientController"

import { PrismaClientRepository } from "@client/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"
import { AccessTokenProvider } from "@user/providers"

const clientRepository = new PrismaClientRepository(prisma)
const accessTokenProvider = new AccessTokenProvider()

const listClientUseCase = new ListClientUseCase(
  clientRepository,
  accessTokenProvider
)
export const listClientController = new ListClientController(listClientUseCase)
