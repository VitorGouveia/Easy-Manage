import { IItemRepository } from "../../IItemRepository"
import { ItemRequest } from "../../IItemRepositoryDTO"

import { PrismaClient } from "@infra/prisma"

export class PrismaItemRepository implements IItemRepository {
  constructor(private client: PrismaClient) {}

  save = async (item: ItemRequest): Promise<void> => {
    await this.client.item.create({
      data: {
        ...item
      }
    })
  }
}
