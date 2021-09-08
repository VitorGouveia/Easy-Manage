import { ItemRequest, ItemResponse } from "./IItemRepositoryDTO"

export interface IItemRepository {
  update: (userId: string, item: ItemRequest) => Promise<ItemResponse>
  save: (item: ItemRequest) => Promise<void>
}
