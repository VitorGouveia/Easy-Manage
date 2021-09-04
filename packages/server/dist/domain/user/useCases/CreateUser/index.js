"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserController = void 0;

var _CreateUserUseCase = require("./CreateUserUseCase");

var _CreateUserController = require("./CreateUserController");

var _entities = require("../../entities");

var _prisma = require("../../repositories/drivers/prisma");

var _providers = require("../../providers");

var _prisma2 = require("../../../../infra/prisma");

const usersRepository = new _prisma.PrismaUserRepository(_prisma2.prisma);
const accessTokenProvider = new _providers.AccessTokenProvider();
const user = new _entities.User(null);
const createUserUseCase = new _CreateUserUseCase.CreateUserUseCase(usersRepository, accessTokenProvider, user);
const createUserController = new _CreateUserController.CreateUserController(createUserUseCase);
exports.createUserController = createUserController;