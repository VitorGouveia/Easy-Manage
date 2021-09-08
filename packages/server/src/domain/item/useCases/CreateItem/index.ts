import { CreateItemUseCase } from "./CreateItemUseCase"
import { CreateItemController } from "./CreateItemController"

import { AccessTokenProvider } from "@user/providers"
import { PrismaItemRepository } from "@item/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const accessTokenProvider = new AccessTokenProvider()
const itemRepository = new PrismaItemRepository(prisma)

const createItemUseCase = new CreateItemUseCase(
  itemRepository,
  accessTokenProvider
)
export const createItemController = new CreateItemController(createItemUseCase)
