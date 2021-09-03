import { Router } from "express"

import { accessTokenAuth } from "../middleware/token"

import { user } from "@domain/user"
import { client } from "@domain/client"

export const router = Router()

/* create user route */
router.post("/user", user.create)

router.post("/user/token/refresh", user.refreshToken)

router.post("/login", user.login)
router.post("/client", accessTokenAuth, client.create)
