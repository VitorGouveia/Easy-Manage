import { Router } from "express"

import { accessTokenAuth } from "../middleware/token"

import { user } from "@domain/user"
import { client } from "@domain/client"
import { item } from "@domain/item"
import { order } from "@domain/order"

export const router = Router()

/* USER */
router.post("/user", user.create)
router.post("/user/token/refresh", accessTokenAuth, user.refreshToken)

/* ITEM */
router.post("/item", accessTokenAuth, item.create)
router.patch("/item/:itemId", accessTokenAuth, item.update)
router.delete("/item/:itemId", accessTokenAuth, item.delete)
router.get("/item", accessTokenAuth, item.list)

/* CLIENT */
router.post("/client", accessTokenAuth, client.create)
router.get("/client/search/:query", accessTokenAuth, client.search)
router.get("/client", accessTokenAuth, client.list)
router.delete("/client/:id", accessTokenAuth, client.delete)
router.patch("/client/:id", accessTokenAuth, client.update)

/* ORDER */
router.post("/order", accessTokenAuth, order.create)

/* SESSION */
router.post("/login", user.login)
