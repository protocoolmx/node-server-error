'use strict';

const util = require('util');

class ServerError extends Error {

  constructor(properties) {
    properties = (properties || {});

    super();
    Error.captureStackTrace(this, ServerError);

    this.name = this.constructor.name;

    this.status = properties.status || 500;
    this.type = properties.type || 'E_UNKNOWN';
    this.code = properties.code || 0;
    this.message = properties.message || 'Encountered an unexpected error';
  }

  toString() {
    return util.format('[%s (%s:%s) %s]', this.name, this.type, this.code, this.message);
  }

  toJSON() {
    return {
      status: this.status,
      code: this.code,
      type: this.type,
      message: this.message
    };
  }
}

module.exports = ServerError;
