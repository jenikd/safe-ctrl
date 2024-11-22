const {ethers, JsonRpcProvider, toQuantity, ZeroAddress, AbiCoder, getNumber} = require("ethers");
const fs = require("fs");

function prepareUpdateNetworkRulesCall(rulesPath) {
    // load contents of rulesPath file and convert it to bytes
    const rules = fs.readFileSync(rulesPath);
    var rulesBytes = new Uint8Array(rules)
    var iface = new ethers.Interface(NodeDriverAuthAbi)
    var calldata = iface.encodeFunctionData("updateNetworkRules", [rulesBytes]);
    return calldata;
}

const NodeDriverAuthAbi = [{
    "constant": false,
    "inputs": [{"internalType": "bytes", "name": "diff", "type": "bytes"}],
    "name": "updateNetworkRules",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}];

module.exports.prepareUpdateNetworkRulesCall = prepareUpdateNetworkRulesCall;