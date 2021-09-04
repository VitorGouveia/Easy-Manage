"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClientController = void 0;

var _CreateClientUseCase = require("./CreateClientUseCase");

var _CreateClientController = require("./CreateClientController");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../user/repositories/drivers/prisma");

var _providers = require("../../../user/providers");

var _prisma3 = require("../../../../infra/prisma");

const userRepository = new _prisma2.PrismaUserRepository(_prisma3.prisma);
const clientRepository = new _prisma.PrismaClientRepository(_prisma3.prisma);
const accessTokenProvider = new _providers.AccessTokenProvider();
const createClientUseCase = new _CreateClientUseCase.CreateClientUseCase(clientRepository, userRepository, accessTokenProvider);
const createClientController = new _CreateClientController.CreateClientController(createClientUseCase);
exports.createClientController = createClientController;