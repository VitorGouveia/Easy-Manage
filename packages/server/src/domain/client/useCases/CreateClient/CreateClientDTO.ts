import { BaseResponse } from "@infra/http/interface/Response"

import { Client } from "@client/entities"

export interface CreateClientRequestDTO {
  token: string
  client: Omit<Client, "id" | "userId">
}

export interface CreateClientResponseDTO extends BaseResponse {
  client: Client
}
