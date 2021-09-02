import { Client } from "@client/entities"

import { Client as ClientORM } from "@infra/prisma"

export type ClientRequest = Client

export type ClientResponse = ClientORM
