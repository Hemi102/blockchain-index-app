const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");

const web = new Web3(ganache.provider());