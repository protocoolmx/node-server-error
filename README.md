# node-server-error

Node Server Error Class

## Install

```
$ npm install node-server-error --save
```

## Overview

### ServerError(properties)

`properties`:

* `status` Status number, defaults to `500`.
* `code` : Some unique code that identifies the error, defaults to `"E_UNKNOWN"`.
* `message` : A human readeable message describing the error, defaults to `"Encountered an unexpected error"`.

## Usage

```javascript
const ServerError = require('node-server-error');

// Create ServerError instance
let serverError = new ServerError();

serverError.toString();
// Output
// {
//   [ServerError: Encountered an unexpected error] name: 'ServerError',
//   message: 'Encountered an unexpected error',
//   status: 500,
//   code: 'E_UNKNOWN'
// }

serverError.toJSON();
// Output
// {
//   status: 500,
//   code: 'E_UNKNOWN',
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
    code: 'E_UNAUTHORIZED',
    message: 'Unauhtorized access!'
  });
}
```

## Test

```
$ npm test
```
