# vanity-contract
Tool to mine vanity ETH contract address

Uses ethereumjs-wallet to randomly generate wallet and checks first contract address created at nonce 0 would match pattern.

Prints out wallet address + privateKey.

# Edit address pattern to find

Address pattern to find can be changed in index.js, ie 0x5e74.....

```
const pattern = new RegExp('^5e74'); // replace pattern to find (should all be in lowercase)
```

# Run in PM2 cluster mode

Run in PM2 cluster mode to run on multi-CPU for faster chance to mine address
