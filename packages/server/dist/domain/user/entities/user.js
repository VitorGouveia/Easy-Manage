"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

var _uuid = require("uuid");

var _bcrypt = require("bcrypt");

class User {
  constructor(props, {
    id,
    isHashed
  } = {}) {
    Object.assign(this, props);

    if (!id) {
      this.id = (0, _uuid.v4)();
    } else {
      this.id = id;
    }

    if (isHashed) {
      this.password = props.password;
    } else {
      /* only run hash function if props are different from null */
      this.password = props !== null && (0, _bcrypt.hashSync)(this.password, 10);
    }
  }

  isValidEmail(email) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  async comparePassword(password, hashedPassword) {
    const comparePassword = await (0, _bcrypt.compare)(password, hashedPassword);
    return comparePassword;
  }

}

exports.User = User;