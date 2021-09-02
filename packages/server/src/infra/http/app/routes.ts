import { Router } from "express"

// import { accessTokenAuth } from "../middleware/token"

import { user } from "@domain/user"
export const router = Router()

/* create user route */
router.post("/user", user.create)

router.post("/login", user.login)
