import { User } from "@user/entities"
import { IUserRepository, IRefreshTokenRepository } from "@user/repositories"
import { AccessTokenProvider, RefreshTokenProvider } from "@user/providers"

import { CreateUserRequestDTO, CreateUserResponseDTO } from "./CreateUserDTO"

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private refreshTokenRepository: IRefreshTokenRepository,
    private accessToken: AccessTokenProvider,
    private refreshToken: RefreshTokenProvider,
    private user: User
  ) {}

  async execute(data: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
    const { email } = data

    /* check is user exists */
    const userAlreadyExists = await this.userRepository.findByEmail(email)

    if (userAlreadyExists) {
      throw new Error("User with that e-mail already exists.")
    }

    /* check if email is valid */
    const isValidEmail = this.user.isValidEmail(email)

    if (!isValidEmail) {
      throw new Error("Invalid e-mail.")
    }

    /* create user */
    const user = new User(data)

    /* save user */
    await this.userRepository.save(user)

    /* create refresh & access token */
    const { refreshToken } = await this.refreshToken.execute(user.id)

    const { accessToken } = await this.accessToken.execute({
      name: user.name,
      email: user.email
    })

    return {
      message: "User Created!",
      user,
      refreshToken,
      accessToken
    }
  }
}
