"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.user = void 0;

var _CreateUser = require("./useCases/CreateUser");

var _AuthUser = require("./useCases/AuthUser");

var _RefreshUserToken = require("./useCases/RefreshUserToken");

const user = {
  create: async (request, response) => {
    return _CreateUser.createUserController.handle(request, response);
  },
  login: async (request, response) => {
    return _AuthUser.authUserController.handle(request, response);
  },
  refreshToken: async (request, response) => {
    return _RefreshUserToken.refreshUserTokenController.handle(request, response);
  }
};
exports.user = user;