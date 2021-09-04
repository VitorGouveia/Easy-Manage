"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _uuid = require("uuid");

class Client {
  constructor(props) {
    Object.assign(this, props);
    this.id = (0, _uuid.v4)();
  }

}

exports.Client = Client;