import { BaseResponse } from "@infra/http/interface/Response"

import { Client } from "@infra/prisma"

export interface SearchClientRequestDTO {
  token: string
  query: string
}

export interface SearchClientResponseDTO extends BaseResponse {
  clients: Client[]
}
