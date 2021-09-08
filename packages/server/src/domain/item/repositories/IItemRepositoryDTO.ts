import { Item } from "@item/entities"

import { Item as ItemORM } from "@infra/prisma"

export type ItemRequest = Item

export type ItemResponse = ItemORM
