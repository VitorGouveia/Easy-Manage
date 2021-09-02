import { BaseResponse } from "@infra/http/interface/Response"

import { User } from "@user/entities"
// import { User as UserORM } from "@infra/prisma"

export interface CreateUserRequestDTO {
  name: string
  email: string
  password: string
}

export interface CreateUserResponseDTO extends BaseResponse {
  // user: UserORM
  user: User
}
