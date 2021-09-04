"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClientController = void 0;

var _UpdateClientUseCase = require("./UpdateClientUseCase");

var _UpdateClientController = require("./UpdateClientController");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const clientRepository = new _prisma.PrismaClientRepository(_prisma2.prisma);
const updateClientUseCase = new _UpdateClientUseCase.UpdateClientUseCase(clientRepository);
const updateClientController = new _UpdateClientController.UpdateClientController(updateClientUseCase);
exports.updateClientController = updateClientController;