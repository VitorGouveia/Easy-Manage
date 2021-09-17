import { IUserRepository } from "../../IUserRepository"
import {
  UserRequest,
  UserResponse,
  UserInfoResponse
} from "../../IUserRepositoryDTO"

import { PrismaClient } from "@infra/prisma"

const hideClientItem = {
  Client: false,
  Item: false,
  Order: false
}

export class PrismaUserRepository implements IUserRepository {
  constructor(private client: PrismaClient) {}

  findById = async (id: string): Promise<UserResponse> => {
    return await this.client.user.findUnique({
      where: {
        id
      },
      include: {
        ...hideClientItem
      }
    })
  }

  getInfo = async (id: string): Promise<UserInfoResponse> => {
    return await this.client.user.findUnique({
      where: {
        id
      },
      include: {
        Client: true,
        Item: true,
        Order: true
      }
    })
  }

  findByEmail = async (email: string): Promise<UserResponse> => {
    return await this.client.user.findUnique({
      where: {
        email
      },
      include: {
        ...hideClientItem
      }
    })
  }

  save = async ({ ...user }: UserRequest): Promise<void> => {
    await this.client.user.create({
      data: {
        ...user
      }
    })
  }
}
