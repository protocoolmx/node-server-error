'use strict';

const assert = require('assert');
const ServerError = require('../index');

describe('ServerError', function() {

  const serverErrorJSON = {
    status: 500,
    code: 0,
    type: 'E_UNKNOWN',
    message: 'Encountered an unexpected error'
  };
  const badRequestJSON = {
    status: 400,
    code: 8520,
    type: 'E_BAD_REQUEST',
    message: 'Bad Request Error'
  };

  it('should exists', function() {
    assert(ServerError !== undefined);
  });

  it('should be an Error', function() {
    let serverError = new ServerError();
    assert.equal(serverError instanceof Error, true);
  });

  it('should return default properties', function() {
    let serverError = new ServerError();
    assert.deepEqual(serverError.toJSON(), serverErrorJSON);
  });

  it('should override default properties', function() {
    let serverError = new ServerError(badRequestJSON);
    assert.deepEqual(serverError.toJSON(), badRequestJSON);
  });

  it('should have stack error', function() {
    let serverError = new ServerError();
    assert.equal(serverError.stack !== undefined, true);
  });
});
