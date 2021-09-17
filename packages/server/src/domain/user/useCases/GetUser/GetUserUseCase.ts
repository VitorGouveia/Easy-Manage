import { IUserRepository } from "@user/repositories"
import { AccessTokenProvider } from "@domain/user/providers"

import { Jwt } from "jsonwebtoken"

import { GetUserRequestDTO, GetUserResponseDTO } from "./GetUserDTO"

interface Payload extends Jwt {
  id: string
}

export class GetUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private accessToken: AccessTokenProvider
  ) {}

  async execute({ token }: GetUserRequestDTO): Promise<GetUserResponseDTO> {
    const { id: userId } = this.accessToken.validate(
      token.split(" ")[1]
    ) as Payload

    const userExists = await this.userRepository.findById(userId)

    if (!userExists) {
      throw new Error("Could not find this user.")
    }

    const user = await this.userRepository.getInfo(userId)

    return {
      message: "Here is your user information.",
      user
    }
  }
}
