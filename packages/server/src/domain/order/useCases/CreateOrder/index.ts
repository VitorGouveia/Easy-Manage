import { CreateOrderUseCase } from "./CreateOrderUseCase"
import { CreateOrderController } from "./CreateOrderController"

import { AccessTokenProvider } from "@user/providers"
import { PrismaOrderRepository } from "@order/repositories/drivers/prisma"
import { prisma } from "@infra/prisma"

const accessTokenProvider = new AccessTokenProvider()
const orderRepository = new PrismaOrderRepository(prisma)

const createOrderUseCase = new CreateOrderUseCase(
  orderRepository,
  accessTokenProvider
)
export const createOrderController = new CreateOrderController(
  createOrderUseCase
)
