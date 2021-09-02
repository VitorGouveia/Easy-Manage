import { UserRequest, UserResponse } from "./IUserRepositoryDTO"

export interface IUserRepository {
  save: (user: UserRequest) => Promise<void>
  findById: (id: string) => Promise<UserResponse>
  findByEmail: (email: string) => Promise<UserResponse>
}
