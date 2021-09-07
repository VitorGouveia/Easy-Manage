import { ClientRequest, ClientResponse } from "./IClientRepositoryDTO"

export interface IClientRepository {
  search: (userId: string, query: string) => Promise<ClientResponse[]>
  find: (id: string) => Promise<ClientResponse>
  list: (userId: string) => Promise<ClientResponse[]>
  update: (id: string, client: ClientRequest) => Promise<ClientResponse>
  save: (client: ClientRequest) => Promise<void>
  delete: (id: string) => Promise<void>
}
