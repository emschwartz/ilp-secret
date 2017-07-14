'use strict'

const URL = require('url')
const ILP_SECRET_PREFIX = 'ilp_secret:1:'

exports.ILP_SECRET_PREFIX = ILP_SECRET_PREFIX

exports.encode = function encode (connectionString) {
  const base64 = Buffer.from(connectionString, 'utf8').toString('base64')
  const base64url = base64.replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
  return ILP_SECRET_PREFIX + base64
}

exports.decode = function decode (ilpSecret) {
  const base64url = ilpSecret.replace(ILP_SECRET_PREFIX, '')
  const connectionString = Buffer.from(base64url, 'base64').toString('utf8')
  const parsed = URL.parse(connectionString)
  if (!parsed.auth) {
    throw new Error('ilp secret does not contain prefix and token')
  }
  const auth = parsed.auth.split(':')
  const rpcUri = URL.format({
    protocol: parsed.protocol,
    host: parsed.host,
    pathname: parsed.pathname,
    search: parsed.search,
    hash: parsed.hash
  })
  return {
    rpcUri,
    prefix: auth[0],
    token: auth[1],
    connectionString
  }
}

