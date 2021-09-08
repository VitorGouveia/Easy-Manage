"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _token = require("../middleware/token");

var _user = require("../../../domain/user");

var _client = require("../../../domain/client");

var _item = require("../../../domain/item");

const router = (0, _express.Router)();
/* USER */

exports.router = router;
router.post("/user", _user.user.create);
router.post("/user/token/refresh", _token.accessTokenAuth, _user.user.refreshToken);
/* ITEM */

router.post("/item", _token.accessTokenAuth, _item.item.create);
router.patch("/item/:itemId", _token.accessTokenAuth, _item.item.update);
/* CLIENT */

router.post("/client", _token.accessTokenAuth, _client.client.create);
router.get("/client/search/:query", _token.accessTokenAuth, _client.client.search);
router.get("/client", _token.accessTokenAuth, _client.client.list);
router.delete("/client/:id", _token.accessTokenAuth, _client.client.delete);
router.patch("/client/:id", _token.accessTokenAuth, _client.client.update);
router.post("/login", _user.user.login);