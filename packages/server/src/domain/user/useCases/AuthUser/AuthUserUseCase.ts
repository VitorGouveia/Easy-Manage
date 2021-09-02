import { AuthUserRequestDTO, AuthUserResponseDTO } from "./AuthUserDTO"

import { IUserRepository, IRefreshTokenRepository } from "@user/repositories"
import { RefreshTokenProvider, AccessTokenProvider } from "@user/providers"
import { User as UserORM } from "@infra/prisma"
import { User } from "@user/entities"

import { Jwt } from "jsonwebtoken"

interface Payload extends Jwt {
  id: string
}

export class AuthUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private refreshTokenRepository: IRefreshTokenRepository,
    private refreshTokenProvider: RefreshTokenProvider,
    private accessTokenProvider: AccessTokenProvider,
    private user: User
  ) {}

  async loginToken(data: string) {
    if (!!data === false) {
      throw new Error("Please supply a jwt token.")
    }

    const authHeader = data.split(" ")[1]
    if (!authHeader) {
      throw new Error("Your token must have the Bearer prefix.")
    }

    const { id } = this.accessTokenProvider.validate(authHeader) as Payload
    const tokenUser = await this.userRepository.findById(id)

    return tokenUser
  }

  async LoginEmail(email: string, password: string) {
    const isValidEmail = this.user.isValidEmail(email)

    if (!isValidEmail) {
      throw new Error("Invalid e-mail.")
    }

    const user = await this.userRepository.findByEmail(email)

    const comparePassword = await this.user.comparePassword(
      password,
      user.password
    )

    if (!comparePassword) {
      /* can't tell client whether it missed the login
      or the password because people can bruteforce it */
      throw new Error("Wrong credentials.")
    }

    return user
  }

  async execute(data: AuthUserRequestDTO): Promise<AuthUserResponseDTO> {
    const { email, password, token } = data
    let user: UserORM

    /* accept login via access_token */
    if (!!token === true) {
      user = await this.loginToken(token)
    } else {
      user = await this.LoginEmail(email, password)
    }

    /* delete all refresh tokens */
    await this.refreshTokenRepository.clean(user.id)

    if (!user) {
      throw new Error("Wrong credentials.")
    }

    const { refreshToken } = await this.refreshTokenProvider.execute(user.id)
    const { accessToken } = await this.accessTokenProvider.execute({
      id: user.id
    })

    /* remove password from final response */
    delete user.password

    return {
      message: "User authenticated with success!",
      user,
      accessToken,
      refreshToken
    }
  }
}
