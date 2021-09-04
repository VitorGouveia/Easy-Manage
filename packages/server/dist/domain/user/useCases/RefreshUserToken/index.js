"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshUserTokenController = void 0;

var _RefreshUserTokenUseCase = require("./RefreshUserTokenUseCase");

var _RefreshUserTokenController = require("./RefreshUserTokenController");

var _prisma = require("../../repositories/drivers/prisma");

var _providers = require("../../providers");

var _prisma2 = require("../../../../infra/prisma");

const refreshTokenRepository = new _prisma.PrismasRefreshTokenRepository(_prisma2.prisma);
const accessTokenProvider = new _providers.AccessTokenProvider();
const refreshTokenProvider = new _providers.RefreshTokenProvider(refreshTokenRepository);
const refreshUserTokenUseCase = new _RefreshUserTokenUseCase.RefreshUserTokenUseCase(refreshTokenRepository, accessTokenProvider, refreshTokenProvider);
const refreshUserTokenController = new _RefreshUserTokenController.RefreshUserTokenController(refreshUserTokenUseCase);
exports.refreshUserTokenController = refreshUserTokenController;