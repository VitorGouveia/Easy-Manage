import { Router } from "express"

import { accessTokenAuth } from "../middleware/token"

import { user } from "@domain/user"
import { client } from "@domain/client"

export const router = Router()

/* USER */
router.post("/user", user.create)
router.post("/user/token/refresh", accessTokenAuth, user.refreshToken)

/* CLIENT */
router.post("/client", accessTokenAuth, client.create)
router.delete("/client", accessTokenAuth, client.delete)

router.post("/login", user.login)
