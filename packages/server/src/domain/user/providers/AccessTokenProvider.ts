import dayjs from "dayjs"

import { sign, verify } from "jsonwebtoken"

export class AccessTokenProvider {
  private accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
  async execute(payload: any) {
    const expiresIn = dayjs().add(15, "minute").unix()

    const accessToken = sign(payload, this.accessTokenSecret, { expiresIn })

    return { accessToken }
  }

  validate(token: string) {
    try {
      const validatedToken = verify(token, this.accessTokenSecret)

      return validatedToken
    } catch (error) {
      throw new Error("This access user account token is not valid.")
    }
  }
}
