"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ok = ok;
exports.created = created;
exports.clientError = clientError;
exports.unauthorized = unauthorized;
exports.forbidden = forbidden;
exports.notFound = notFound;
exports.conflict = conflict;
exports.tooMany = tooMany;
exports.fail = fail;

function ok(DTO) {
  return {
    statusCode: 200,
    body: DTO
  };
}

function created(DTO) {
  return {
    statusCode: 201,
    body: DTO
  };
}

function clientError(error) {
  return {
    statusCode: 400,
    body: {
      error: error.message
    }
  };
}

function unauthorized(error) {
  return {
    statusCode: 401,
    body: {
      name: error.name,
      error: error.message
    }
  };
}

function forbidden(error) {
  return {
    statusCode: 403,
    body: {
      error: error.message
    }
  };
}

function notFound(error) {
  return {
    statusCode: 404,
    body: {
      error: error.message
    }
  };
}

function conflict(error) {
  return {
    statusCode: 409,
    body: {
      error: error.message
    }
  };
}

function tooMany(error) {
  return {
    statusCode: 429,
    body: {
      error: error.message
    }
  };
}

function fail(error) {
  return {
    statusCode: 500,
    body: {
      error: error.message
    }
  };
}