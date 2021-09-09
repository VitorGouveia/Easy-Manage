import { v4 as uuid } from "uuid"

export class Item {
  public readonly id: string

  public readonly userId: string

  public name: string
  public description: string
  public price: number
  public discount: number
  public quantity: number

  constructor(props: Omit<Item, "id">) {
    Object.assign(this, props)

    this.quantity = Number(this.quantity)
    this.price = Number(this.price)
    this.discount = Number(this.discount)

    this.id = uuid()
  }
}
