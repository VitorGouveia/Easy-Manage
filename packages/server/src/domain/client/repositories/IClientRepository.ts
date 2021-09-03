import { ClientRequest, ClientResponse } from "./IClientRepositoryDTO"

export interface IClientRepository {
  find: (id: string) => Promise<ClientResponse>
  list: (userId: string) => Promise<ClientResponse[]>
  save: (client: ClientRequest) => Promise<void>
  delete: (id: string) => Promise<void>
}
