import { BaseResponse } from "@infra/http/interface/Response"

import { Client } from "@client/entities"
import { User } from "@infra/prisma"

export interface CreateClientRequestDTO {
  token: string
  client: Omit<Client, "id" | "userId">
}

export interface CreateClientResponseDTO extends BaseResponse {
  user: User
  client: Client
}
