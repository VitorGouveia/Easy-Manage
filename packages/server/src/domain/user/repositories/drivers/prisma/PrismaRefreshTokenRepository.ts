import { IRefreshTokenRepository } from "../../IRefreshTokenRepository"
import {
  RefreshTokenRequest,
  RefreshTokenResponse
} from "../../IRefreshTokenRepositoryDTO"

import { PrismaClient } from "@infra/prisma"

export class PrismasRefreshTokenRepository implements IRefreshTokenRepository {
  constructor(private client: PrismaClient) {}

  create = async ({
    ...data
  }: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
    return await this.client.refreshToken.create({
      data: {
        ...data
      }
    })
  }

  find = async (id: string): Promise<RefreshTokenResponse> => {
    return await this.client.refreshToken.findUnique({
      where: {
        id
      }
    })
  }

  clean = async (userId: string): Promise<void> => {
    await this.client.refreshToken.deleteMany({
      where: {
        userId
      }
    })
  }
}
