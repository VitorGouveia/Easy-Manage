"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listClientController = void 0;

var _ListClientUseCase = require("./ListClientUseCase");

var _ListClientController = require("./ListClientController");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

var _providers = require("../../../user/providers");

const clientRepository = new _prisma.PrismaClientRepository(_prisma2.prisma);
const accessTokenProvider = new _providers.AccessTokenProvider();
const listClientUseCase = new _ListClientUseCase.ListClientUseCase(clientRepository, accessTokenProvider);
const listClientController = new _ListClientController.ListClientController(listClientUseCase);
exports.listClientController = listClientController;