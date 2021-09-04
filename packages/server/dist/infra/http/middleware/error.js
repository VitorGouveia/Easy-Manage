"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorMiddleware = void 0;

require("express-async-errors");

const ErrorMiddleware = (error, request, response) => {
  /* default error status is 400 */
  let status = 400;
  /* searches for a found & find words in the response message */

  const ErrorIsNotFound = error.message.match(/found|find/);

  if (ErrorIsNotFound) {
    status = 404;
  }

  return response.status(status).json({
    name: error.name,
    message: error.message
  });
};

exports.ErrorMiddleware = ErrorMiddleware;