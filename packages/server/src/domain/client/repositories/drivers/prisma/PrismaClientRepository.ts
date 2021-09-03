import { IClientRepository } from "../../IClientRepository"
import { ClientRequest, ClientResponse } from "../../IClientRepositoryDTO"

import { PrismaClient } from "@infra/prisma"

export class PrismaClientRepository implements IClientRepository {
  constructor(private client: PrismaClient) {}

  find = async (id: string): Promise<ClientResponse> => {
    return await this.client.client.findUnique({
      where: {
        id
      }
    })
  }

  list = async (userId: string): Promise<ClientResponse[]> => {
    return await this.client.client.findMany({
      where: {
        userId
      }
    })
  }

  update = async (
    id: string,
    { ...client }: ClientRequest
  ): Promise<ClientResponse> => {
    return await this.client.client.update({
      where: {
        id
      },
      data: {
        ...client
      }
    })
  }

  save = async ({ ...rest }: ClientRequest): Promise<void> => {
    await this.client.client.create({
      data: {
        ...rest
      }
    })
  }

  delete = async (id: string): Promise<void> => {
    await this.client.client.delete({
      where: {
        id
      }
    })
  }
}
