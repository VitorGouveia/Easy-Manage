import { User } from "@user/entities"
import { IUserRepository } from "@user/repositories"
import { AccessTokenProvider } from "@user/providers"

import { CreateUserRequestDTO, CreateUserResponseDTO } from "./CreateUserDTO"

export class CreateUserUseCase {
  constructor(
    private userRepository: IUserRepository,
    private accessToken: AccessTokenProvider,
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

    const { accessToken } = await this.accessToken.execute({
      id: user.id,
      name: user.name,
      email: user.email
    })

    delete user.password

    return {
      message: "User Created!",
      user,
      accessToken
    }
  }
}
