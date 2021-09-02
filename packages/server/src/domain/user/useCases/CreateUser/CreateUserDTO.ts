import { BaseResponse } from "@infra/http/interface/Response"

import { User } from "@user/entities"

export interface CreateUserRequestDTO {
  name: string
  email: string
  password: string
}

export interface CreateUserResponseDTO extends BaseResponse {
  user: User
  accessToken: string
}
