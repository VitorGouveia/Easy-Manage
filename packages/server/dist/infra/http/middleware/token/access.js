"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessTokenAuth = void 0;

var _jsonwebtoken = require("jsonwebtoken");

var _HttpResponse = require("../../interface/HttpResponse");

const accessTokenAuth = (request, response, next) => {
  // base_token(request, response);
  const authHeader = request.headers.authorization;
  /* if there is not authorization header token */

  if (!authHeader) {
    const {
      body,
      statusCode
    } = (0, _HttpResponse.unauthorized)({
      name: "Access Auth token missing!",
      message: "You must provide an authorization token to use this route."
    });
    return response.status(statusCode).json(body);
  }

  const authToken = authHeader.split(" ")[1];
  /* if there is not authorization header */

  if (!authToken) {
    const {
      body,
      statusCode
    } = (0, _HttpResponse.unauthorized)({
      name: "Bearer prefix missing!",
      message: "You need to include the Bearer keyword before your token with a space in between."
    });
    return response.status(statusCode).json(body);
  }

  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  try {
    (0, _jsonwebtoken.verify)(authToken, accessTokenSecret);
    next();
  } catch (error) {
    const {
      body,
      statusCode
    } = (0, _HttpResponse.unauthorized)(error);
    return response.status(statusCode).json(body);
  }
};

exports.accessTokenAuth = accessTokenAuth;