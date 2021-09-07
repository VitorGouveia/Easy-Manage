"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchClientController = void 0;

var _SearchClientUseCase = require("./SearchClientUseCase");

var _SearchClientController = require("./SearchClientController");

var _providers = require("../../../user/providers");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const accessTokenProvider = new _providers.AccessTokenProvider();
const clientRepository = new _prisma.PrismaClientRepository(_prisma2.prisma);
const searchClientUseCase = new _SearchClientUseCase.SearchClientUseCase(clientRepository, accessTokenProvider);
const searchClientController = new _SearchClientController.SearchClientController(searchClientUseCase);
exports.searchClientController = searchClientController;