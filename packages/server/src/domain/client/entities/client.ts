import { v4 as uuid } from "uuid"

export class Client {
  public readonly id: string

  public readonly userId: string

  public name: string
  public phoneNumber: string
  public city: string
  public street: string
  public houseNumber: string
  public opts: string

  constructor(props: Omit<Client, "id">) {
    Object.assign(this, props)

    this.id = uuid()
  }
}
