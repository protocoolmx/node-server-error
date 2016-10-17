'use strict';

let assert = require('assert');

describe('ServerError', function() {

  let ServerError;
  let serverErrorJSON = {
    status: 500,
    code: 'E_UNKNOWN',
    message: 'Encountered an unexpected error'
  };
  let badRequestJSON = {
    status: 400,
    code: 'E_BAD_REQUEST',
    message: 'Bad Request Error'
  };

  before('get ServerError', function() {
    ServerError = require('../index');
  });

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
