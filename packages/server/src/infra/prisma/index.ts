import { PrismaClient, User, RefreshToken } from "@prisma/client"

const prisma = new PrismaClient()

export { prisma, PrismaClient, User, RefreshToken }
