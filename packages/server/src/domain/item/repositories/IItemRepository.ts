import { ItemRequest } from "./IItemRepositoryDTO"

export interface IItemRepository {
  save: (item: ItemRequest) => Promise<void>
}
