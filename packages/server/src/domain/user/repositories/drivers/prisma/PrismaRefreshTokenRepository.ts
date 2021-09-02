import { IRefreshTokenRepository } from "../../IRefreshTokenRepository"
import {
  RefreshTokenRequest,
  RefreshTokenResponse
} from "../../IRefreshTokenRepositoryDTO"

import { PrismaClient } from "@infra/prisma"

export class PrismasRefreshTokenRepository implements IRefreshTokenRepository {
  constructor(private client: PrismaClient) {}

  create = async ({
    ...refreshToken
  }: RefreshTokenRequest): Promise<RefreshTokenResponse> => {
    return await this.client.refreshToken.create({
      data: {
        ...refreshToken
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
