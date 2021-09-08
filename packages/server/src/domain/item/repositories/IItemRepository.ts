import { ItemRequest, ItemResponse } from "./IItemRepositoryDTO"

export interface IItemRepository {
  find: (id: string) => Promise<ItemResponse>
  update: (userId: string, item: ItemRequest) => Promise<ItemResponse>
  save: (item: ItemRequest) => Promise<void>
  delete: (id: string) => Promise<void>
}
