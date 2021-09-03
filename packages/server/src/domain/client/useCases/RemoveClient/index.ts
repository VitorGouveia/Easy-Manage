import { RemoveClientUseCase } from "./RemoveClientUseCase"
import { RemoveClientController } from "./RemoveClientController"

import { PrismaClientRepository } from "@client/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const clientRepository = new PrismaClientRepository(prisma)

const removeClientUseCase = new RemoveClientUseCase(clientRepository)
export const removeClientController = new RemoveClientController(
  removeClientUseCase
)
