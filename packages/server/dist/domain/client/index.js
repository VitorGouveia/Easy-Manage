"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.client = void 0;

var _CreateClient = require("./useCases/CreateClient");

var _RemoveClient = require("./useCases/RemoveClient");

var _UpdateClient = require("./useCases/UpdateClient");

const client = {
  create: async (request, response) => {
    return _CreateClient.createClientController.handle(request, response);
  },
  delete: async (request, response) => {
    return _RemoveClient.removeClientController.handle(request, response);
  },
  update: async (request, response) => {
    return _UpdateClient.updateClientController.handle(request, response);
  }
};
exports.client = client;