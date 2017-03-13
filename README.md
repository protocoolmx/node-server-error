# node-server-error

[![npm version](https://badge.fury.io/js/node-server-error.svg)](https://badge.fury.io/js/node-server-error) [![Build Status](https://travis-ci.org/protocoolmx/node-server-error.svg?branch=master)](https://travis-ci.org/protocoolmx/node-server-error)

Server Error Class

## Install

```
$ npm install node-server-error --save
```

## Overview

### ServerError(properties)

Properties

*   `status` (Number) - HTTP status response, defaults to `500`.
*   `type` (String) - Some unique code that identifies the error, defaults to `'E_UNKNOWN'`.
*   `code` (Number) - Number code for unique identify error, defaults to `0`.
*   `message` (String) - A human readable message describing the error, defaults to `'Encountered an unexpected error'`.

## Usage

```javascript
const ServerError = require('node-server-error');

// Create ServerError instance
let serverError = new ServerError();

serverError.toString();
// Output
// [ServerError (E_UNKNOWN:0) Encountered an unexpected error]

serverError.toJSON();
// Output
// {
//   status: 500,
//   type: 'E_UNKNOWN',
//   code: 0,
//   message: 'Encountered an unexpected error'
// }
```

Default properties

```javascript
if (/* some condition that means an error */) {
  throw new ServerError();
}
```


Override default properties

```javascript
if (/* some condition that means an error */) {
  throw new ServerError({
    status: 401,
    type: 'E_UNAUTHORIZED',
    code: 8520, // It could mean a unique error code.
    message: 'Unauhtorized access!'
  });
}
```

## Test

```
$ npm test
```
