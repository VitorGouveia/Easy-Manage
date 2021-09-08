import { OrderRequest, OrderResponse } from "./IOrderRepositoryDTO"

export interface IOrderRepository {
  find: (userId: string) => Promise<OrderResponse[]>
  save: (order: OrderRequest) => Promise<void>
}
