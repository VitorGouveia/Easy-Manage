import { BaseResponse } from "@infra/http/interface/Response"

import { Client } from "@infra/prisma"

export interface ListClientRequestDTO {
  token: string
}

export interface ListClientResponseDTO extends BaseResponse {
  clients: Client[]
}
