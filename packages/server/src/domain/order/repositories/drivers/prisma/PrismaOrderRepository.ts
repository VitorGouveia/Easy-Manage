import { OrderRequest, OrderResponse } from "../../IOrderRepositoryDTO"
import { IOrderRepository } from "../../IOrderRepository"

import { PrismaClient } from "@infra/prisma"

export class PrismaOrderRepository implements IOrderRepository {
  constructor(private client: PrismaClient) {}

  find = async (userId: string): Promise<OrderResponse[]> => {
    return await this.client.order.findMany({
      where: {
        userId
      }
    })
  }

  save = async (order: OrderRequest): Promise<void> => {
    await this.client.order.create({
      data: {
        ...order
      }
    })
  }
}
