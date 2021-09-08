import {
  PrismaClient,
  User,
  RefreshToken,
  Client,
  Item,
  Order
} from "@prisma/client"

const prisma = new PrismaClient()

export { prisma, PrismaClient, User, RefreshToken, Client, Item, Order }
