#!/usr/bin/env node

'use strict'

const secret = require('./index')

const str = process.argv[2]

if (str && str.indexOf(secret.ILP_SECRET_PREFIX) === 0) {
  console.log(JSON.stringify(secret.decode(str)))
} else if (str && str.indexOf('http') === 0) {
  console.log(secret.encode(str))
} else {
  console.error('Usage: ilp-secret <string>\n\n'
    + 'where <string> is the ILP Secret or connection string you want to decode or encode')
}
