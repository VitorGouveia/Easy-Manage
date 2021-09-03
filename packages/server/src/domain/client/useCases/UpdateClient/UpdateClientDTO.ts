import { BaseResponse } from "@infra/http/interface/Response"

import { Client } from "@client/entities"

export interface UpdateClientRequestDTO {
  id: string
  client: Omit<Client, "id" | "userId">
}

export interface UpdateClientResponseDTO extends BaseResponse {
  client: Client
}
