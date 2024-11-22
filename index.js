const { createSafeClient } = require('@safe-global/sdk-starter-kit')
const { prepareUpdateNetworkRulesCall } = require('./src/utils.js');
require('dotenv').config();

const SIGNER_PRIVATE_KEY = process.env.PK
const RPC_URL = process.env.URL
const SAFE_ADDRESS = process.env.SAFE_ACCOUNT
const NodeDriverAuthAddress = "0xd100ae0000000000000000000000000000000000";

/**
 * @param {string} url
 * @param {string} rulesPath
 * @returns {Promise<void>}
 */
async function main(rulesPath) {

    const safeClient = await createSafeClient({
        provider: RPC_URL,
        signer: SIGNER_PRIVATE_KEY,
        safeAddress: SAFE_ADDRESS
    })

    var calldata = prepareUpdateNetworkRulesCall(rulesPath);
    console.log("calldata:", calldata);

    const transactions = [{
        to: NodeDriverAuthAddress,
        data: calldata,
        value: '0',
    }]

    const txResult = await safeClient.send({ transactions })
    console.log("txResult", txResult)
}

const argv = require("minimist")(process.argv.slice(2), { string: ["rulesPath"] });

if (argv.rulesPath === undefined) {
    console.error("Missing required new rulesPath --rulesPath");
    process.exit(1);
}

main(argv.rulesPath).catch(error => {
    console.error(error);
}).then(() => console.log('done'));