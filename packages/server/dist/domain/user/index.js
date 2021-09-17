"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = void 0;

var _CreateUser = require("./useCases/CreateUser");

var _AuthUser = require("./useCases/AuthUser");

var _RefreshUserToken = require("./useCases/RefreshUserToken");

var _GetUser = require("./useCases/GetUser");

const user = {
  create: async (request, response) => {
    return _CreateUser.createUserController.handle(request, response);
  },
  login: async (request, response) => {
    return _AuthUser.authUserController.handle(request, response);
  },
  refreshToken: async (request, response) => {
    return _RefreshUserToken.refreshUserTokenController.handle(request, response);
  },
  list: async (request, response) => {
    return _GetUser.getUserController.handle(request, response);
  }
};
exports.user = user;