# ilp-secret
> Encode and decode ILP Secret strings

The ILP Secret is a minimal format for encoding [ILP RPC](https://github.com/interledger/rfcs/blob/master/0021-plugin-rpc-api/0021-plugin-rpc-api.md) connection strings. It enables users to provide ILP-enabled apps with a single (opaque) credential that allows those apps to send and receive payments on their behalf.

## Installation

As a library:

`npm install --save ilp-secret`

As a CLI tool:

`npm install -g ilp-secret`

## Format

The ILP Secret is a base64url-encoded connection string prefixed by `ilp_secret:1:`. The `1` indicates the version and only version 1 is currently supported. The connection string is a URI that contains the ILP RPC endpoint, the prefix and the bearer token used to authenticate requests.

For example, the connection string:

`https://prefix:secret-token@provider.example/rpc-endpoint`

Becomes:

`ilp_secret:1:aHR0cHM6Ly9wcmVmaXg6c2VjcmV0LXRva2VuQHByb3ZpZGVyLmV4YW1wbGUvcnBjLWVuZHBvaW50`
