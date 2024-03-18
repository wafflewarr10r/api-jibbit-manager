const api_jibbit_manager = require('api-jibbit-manager');
const upload_jibbit_use = require('upload-jibbit-use');
const helmet = require('helmet');
const xml2js = require('xml2js');
const commander = require('commander');
const sinon = require('sinon');
const web3_utils = require('web3-utils');
const debug = require('debug');
const request = require('request');
const supertest = require('supertest');
const webpack = require('webpack');
const mongoose = require('mongoose');
const sequelize = require('sequelize');
const chalk = require('chalk');
const dotenv = require('dotenv');

// Estimate gas cost for a smart contract method call
contractInstance.methods.someMethod().estimateGas({ from: senderAddress }).then(gas => {
  console.log('Gas estimate for method:', gas);
}).catch(err => {
  console.error('Error estimating gas for method:', err);
});

console.log(`Current date and time: ${new Date().toLocaleString()}`);

const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  console.log('address: %j family: IPv%s', address, family);
});

const fs = require('fs');
fs.writeFileSync('message.txt', 'Hello Node.js', 'utf8');
console.log('File written successfully');