"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserController = void 0;

var _GetUserUseCase = require("./GetUserUseCase");

var _GetUserController = require("./GetUserController");

var _providers = require("../../providers");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const userRepository = new _prisma.PrismaUserRepository(_prisma2.prisma);
const accessTokenProvider = new _providers.AccessTokenProvider();
const getUserUseCase = new _GetUserUseCase.GetUserUseCase(userRepository, accessTokenProvider);
const getUserController = new _GetUserController.GetUserController(getUserUseCase);
exports.getUserController = getUserController;