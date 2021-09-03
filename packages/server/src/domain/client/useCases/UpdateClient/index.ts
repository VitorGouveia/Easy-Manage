import { UpdateClientUseCase } from "./UpdateClientUseCase"
import { UpdateClientController } from "./UpdateClientController"

import { PrismaClientRepository } from "@client/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const clientRepository = new PrismaClientRepository(prisma)

const updateClientUseCase = new UpdateClientUseCase(clientRepository)
export const updateClientController = new UpdateClientController(
  updateClientUseCase
)
