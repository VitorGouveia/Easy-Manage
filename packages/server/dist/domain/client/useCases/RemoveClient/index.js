"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeClientController = void 0;

var _RemoveClientUseCase = require("./RemoveClientUseCase");

var _RemoveClientController = require("./RemoveClientController");

var _prisma = require("../../repositories/drivers/prisma");

var _prisma2 = require("../../../../infra/prisma");

const clientRepository = new _prisma.PrismaClientRepository(_prisma2.prisma);
const removeClientUseCase = new _RemoveClientUseCase.RemoveClientUseCase(clientRepository);
const removeClientController = new _RemoveClientController.RemoveClientController(removeClientUseCase);
exports.removeClientController = removeClientController;