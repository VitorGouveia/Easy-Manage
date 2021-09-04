"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authUserController = void 0;

var _AuthUserUseCase = require("./AuthUserUseCase");

var _AuthUserController = require("./AuthUserController");

var _entities = require("../../entities");

var _prisma = require("../../repositories/drivers/prisma");

var _providers = require("../../providers");

var _prisma2 = require("../../../../infra/prisma");

const usersRepository = new _prisma.PrismaUserRepository(_prisma2.prisma);
const refreshTokenRepository = new _prisma.PrismasRefreshTokenRepository(_prisma2.prisma);
const accessTokenProvider = new _providers.AccessTokenProvider();
const refreshTokenProvider = new _providers.RefreshTokenProvider(refreshTokenRepository);
const user = new _entities.User(null);
const authUserUseCase = new _AuthUserUseCase.AuthUserUseCase(usersRepository, refreshTokenRepository, refreshTokenProvider, accessTokenProvider, user);
const authUserController = new _AuthUserController.AuthUserController(authUserUseCase);
exports.authUserController = authUserController;