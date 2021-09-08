import { v4 as uuid } from "uuid"

export class Order {
  public readonly id: string

  public quantity: number
  public itemId: string
  public userId: string

  constructor(props: Omit<Order, "id">) {
    Object.assign(this, props)

    this.id = uuid()
  }
}
