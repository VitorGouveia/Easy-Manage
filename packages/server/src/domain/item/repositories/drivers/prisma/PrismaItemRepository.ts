import { IItemRepository } from "../../IItemRepository"
import { ItemRequest, ItemResponse } from "../../IItemRepositoryDTO"

import { PrismaClient } from "@infra/prisma"

export class PrismaItemRepository implements IItemRepository {
  constructor(private client: PrismaClient) {}

  find = async (id: string): Promise<ItemResponse> => {
    return await this.client.item.findUnique({
      where: {
        id
      }
    })
  }

  update = async (id: string, item: ItemRequest): Promise<ItemResponse> => {
    return await this.client.item.update({
      where: {
        id
      },
      data: {
        ...item
      }
    })
  }

  save = async (item: ItemRequest): Promise<void> => {
    await this.client.item.create({
      data: {
        ...item
      }
    })
  }

  delete = async (id: string): Promise<void> => {
    await this.client.item.delete({
      where: {
        id
      }
    })
  }
}
