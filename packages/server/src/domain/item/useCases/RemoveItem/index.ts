import { RemoveItemUseCase } from "./RemoveItemUseCase"
import { RemoveItemController } from "./RemoveItemController"

import { PrismaItemRepository } from "@item/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const itemRepository = new PrismaItemRepository(prisma)

const removeItemUseCase = new RemoveItemUseCase(itemRepository)
export const removeItemController = new RemoveItemController(removeItemUseCase)
