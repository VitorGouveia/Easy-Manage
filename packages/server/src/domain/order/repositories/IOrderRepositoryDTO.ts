import { Order } from "@order/entities"

import { Order as OrderORM } from "@infra/prisma"

export type OrderRequest = Order

export type OrderResponse = OrderORM
