import { User } from "@user/entities"

import {
  User as UserORM,
  Item as ItemORM,
  Client as ClientORM,
  Order as OrderORM
} from "@infra/prisma"

export type UserRequest = User

export type UserResponse = UserORM

export type UserInfoResponse = {
  id: string
  name: string
  email: string
  password: string
  createdAt: Date
  updatedAt: Date
  Client: ClientORM[]
  Item: ItemORM[]
  Order: OrderORM[]
}
