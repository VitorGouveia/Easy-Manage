import {
  UserRequest,
  UserResponse,
  UserInfoResponse
} from "./IUserRepositoryDTO"

export interface IUserRepository {
  save: (user: UserRequest) => Promise<void>
  getInfo: (id: string) => Promise<UserInfoResponse>
  findById: (id: string) => Promise<UserResponse>
  findByEmail: (email: string) => Promise<UserResponse>
}
