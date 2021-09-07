import { IClientRepository } from "@client/repositories"
import { AccessTokenProvider } from "@user/providers"

import { Jwt } from "jsonwebtoken"

import {
  SearchClientRequestDTO,
  SearchClientResponseDTO
} from "./SearchClientDTO"

interface Payload extends Jwt {
  id: string
}

export class SearchClientUseCase {
  constructor(
    private clientRepository: IClientRepository,
    private accessToken: AccessTokenProvider
  ) {}

  async execute({
    query,
    token
  }: SearchClientRequestDTO): Promise<SearchClientResponseDTO> {
    const authToken = token.split(" ")[1]

    const { id } = this.accessToken.validate(authToken) as Payload

    const clients = await this.clientRepository.search(id, query)

    return {
      message: "Here are your clients.",
      clients
    }
  }
}
