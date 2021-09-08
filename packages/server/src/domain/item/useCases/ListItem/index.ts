import { ListItemUseCase } from "./ListItemUseCase"
import { ListItemController } from "./ListItemController"

import { AccessTokenProvider } from "@user/providers"
import { PrismaItemRepository } from "@item/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const accessTokenProvider = new AccessTokenProvider()
const itemRepository = new PrismaItemRepository(prisma)

const listItemUseCase = new ListItemUseCase(itemRepository, accessTokenProvider)
export const listItemControler = new ListItemController(listItemUseCase)
