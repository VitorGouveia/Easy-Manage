import { IClientRepository } from "@client/repositories"
import { AccessTokenProvider } from "@user/providers"

import { Jwt } from "jsonwebtoken"

import { ListClientRequestDTO, ListClientResponseDTO } from "./ListClientDTO"

interface Payload extends Jwt {
  id: string
}

export class ListClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
    private accessToken: AccessTokenProvider
  ) {}

  async execute({
    token
  }: ListClientRequestDTO): Promise<ListClientResponseDTO> {
    /* get token information */
    const authToken = token.split(" ")[1]

    const { id } = this.accessToken.validate(authToken) as Payload

    const clients = await this.clientRepository.list(id)

    return {
      message: "Here are your clients.",
      clients
    }
  }
}
