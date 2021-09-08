import { Router } from "express"

import { accessTokenAuth } from "../middleware/token"

import { user } from "@domain/user"
import { client } from "@domain/client"
import { item } from "@domain/item"

export const router = Router()

/* USER */
router.post("/user", user.create)
router.post("/user/token/refresh", accessTokenAuth, user.refreshToken)

/* ITEM */
router.post("/item", accessTokenAuth, item.create)
router.patch("/item/:itemId", accessTokenAuth, item.update)
router.delete("/item/:itemId", accessTokenAuth, item.delete)

/* CLIENT */
router.post("/client", accessTokenAuth, client.create)
router.get("/client/search/:query", accessTokenAuth, client.search)
router.get("/client", accessTokenAuth, client.list)
router.delete("/client/:id", accessTokenAuth, client.delete)
router.patch("/client/:id", accessTokenAuth, client.update)

router.post("/login", user.login)
