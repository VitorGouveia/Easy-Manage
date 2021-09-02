import { IUserRepository } from "../../IUserRepository"
import { UserRequest, UserResponse } from "../../IUserRepositoryDTO"

import { PrismaClient } from "@infra/prisma"

export class PrismaUserRepository implements IUserRepository {
  constructor(private client: PrismaClient) {}

  findById = async (id: string): Promise<UserResponse> => {
    return await this.client.user.findUnique({
      where: {
        id
      }
    })
  }

  findByEmail = async (email: string): Promise<UserResponse> => {
    return await this.client.user.findUnique({
      where: {
        email
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
