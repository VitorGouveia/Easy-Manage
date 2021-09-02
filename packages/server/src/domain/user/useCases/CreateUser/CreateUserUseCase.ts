import { User } from "@user/entities"

import { CreateUserRequestDTO, CreateUserResponseDTO } from "./CreateUserDTO"

export class CreateUserUseCase {
  constructor(private user: User) {}

  async execute(data: CreateUserRequestDTO): Promise<CreateUserResponseDTO> {
    const { email } = data

    /* check if email is valid */
    const isValidEmail = this.user.isValidEmail(email)

    if (!isValidEmail) {
      throw new Error("Invalid e-mail.")
    }
    /* create user */
    const user = new User(data)

    return {
      message: "User Created!",
      user
    }
  }
}
