import { Jwt } from "jsonwebtoken"

import { AccessTokenProvider } from "@user/providers"
import { IClientRepository } from "@client/repositories"
import { IUserRepository } from "@user/repositories"
import { Client } from "@client/entities"

import {
  CreateClientRequestDTO,
  CreateClientResponseDTO
} from "./CreateClientDTO"

interface Payload extends Jwt {
  id: string
}

export class CreateClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
    private userRepository: IUserRepository,
    private accessToken: AccessTokenProvider
  ) {}

  async execute(
    data: CreateClientRequestDTO
  ): Promise<CreateClientResponseDTO> {
    const {
      client: { ...clientData },
      token
    } = data
    /* get token information */
    const authToken = token.split(" ")[1]

    const { id } = this.accessToken.validate(authToken) as Payload

    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new Error("The id in the token does not point to an existing user.")
    }

    const client = new Client({
      ...clientData,
      userId: user.id
    })
    await this.clientRepository.save(client)

    return {
      message: "Client created with success!",
      client
    }
  }
}
