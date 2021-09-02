import { v4 as uuid } from "uuid"
import { compare, hashSync } from "bcrypt"

interface UserProps {
  name: string
  email: string
  password: string
}

interface Options {
  id?: string
  createdAt?: Date
  isHashed?: boolean
}

export class User {
  public readonly id: string

  public name: string
  public email: string
  public password: string

  constructor(props: UserProps, { id, isHashed }: Options = {}) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    } else {
      this.id = id
    }

    if (isHashed) {
      this.password = props.password
    } else {
      /* only run hash function if props are different from null */
      this.password = props !== null && hashSync(this.password, 10)
    }
  }

  public isValidEmail(email: string): boolean {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email)
  }

  public async comparePassword(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    const comparePassword = await compare(password, hashedPassword)

    return comparePassword
  }
}
