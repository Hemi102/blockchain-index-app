const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "sample decorate runway spend equip curve dry health vacuum warfare debris mother",
  "https://sepolia.infura.io/v3/03b27c46b0fe43d09692d03982093521"
);
const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("acounts are", accounts[0]);
  console.log("interface is ", interface);
  console.log("bytecode is ", bytecode);
  try {
    inbox = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode, arguments: ["Hi there is first contract!"] })
      .send({ from: accounts[0], gas: 1 });
    console.log("index is", index);
  } catch (e) {
    console.log(e);
  }
  // console.log("Contract deployed to ", result.options.address);
  //   provider.engine.stop();
};
deploy();
