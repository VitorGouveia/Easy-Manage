import { BaseResponse } from "@infra/http/interface/Response"

import { Client } from "@client/entities"

export interface RemoveClientRequestDTO {
  id: string
}

export interface RemoveClientResponseDTO extends BaseResponse {
  client: Client
}
