import { UpdateItemUseCase } from "./UpdateItemUseCase"
import { UpdateItemController } from "./UpdateItemController"

import { AccessTokenProvider } from "@user/providers"
import { PrismaItemRepository } from "@item/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const accessTokenProvider = new AccessTokenProvider()
const itemRepository = new PrismaItemRepository(prisma)

const updateItemUseCase = new UpdateItemUseCase(
  itemRepository,
  accessTokenProvider
)
export const updateItemController = new UpdateItemController(updateItemUseCase)
