import { PrismaClient, User, RefreshToken, Client } from "@prisma/client"

const prisma = new PrismaClient()

export { prisma, PrismaClient, User, RefreshToken, Client }
