import { BaseResponse } from "@infra/http/interface/Response"

import { User } from "@infra/prisma"

export interface GetUserRequestDTO {
  token: string
}

export interface GetUserResponseDTO extends BaseResponse {
  user: User
}
