'use strict';

const rlp = require('rlp');
const keccak = require('keccak');
const wallet = require('ethereumjs-wallet');

const pattern = new RegExp('^5e74'); // (Input should be all lowercase) replace pattern to find
let found = false;
let runs = 0;

while (!found) {
  if (runs % 1e5 == 0) {
    console.log(`runs: ${runs}`);
  }
  let nonce = 0x00; //The nonce must be a hex literal!
  let sender = wallet.generate(); // Generate wallet
  let address = sender.getAddressString(); //Requires a hex string as input!

  let input_arr = [address, nonce];
  let rlp_encoded = rlp.encode(input_arr);

  let contract_address_long = keccak('keccak256')
    .update(rlp_encoded)
    .digest('hex');

  let contract_address = contract_address_long.substring(24); //Trim the first 24 characters.

  if (pattern.test(contract_address)) {
    const privateKey = sender.getPrivateKeyString();
    console.log(`contract_address: ${contract_address}`);
    console.log(`sender address: ${address}`);
    console.log(`privateKey: ${privateKey}`);
    found = true;
  }
  runs++;
}
