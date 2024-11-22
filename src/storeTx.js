import { createSafeClient } from '@safe-global/sdk-starter-kit'
require('dotenv').config();

const SIGNER_PRIVATE_KEY = process.env.PK
const RPC_URL = process.env.URL
const SAFE_ADDRESS = process.env.SAFE_ACCOUNT

const safeClient = await createSafeClient({
    provider: RPC_URL,
    signer: SIGNER_PRIVATE_KEY,
    safeAddress: SAFE_ADDRESS
})

 // store contract on devnet
const transactions = [{
    to: '0xdb6026ccc2bbed2725e2fb9b1b12785e89d9dfb3',
    data: '0x6057361d000000000000000000000000000000000000000000000000000000000000002a',
    value: '0'
}]


const txResult = await safeClient.send({ transactions })
console.log("txResult", txResult)

const safeTxHash = txResult.transactions?.safeTxHash

console.log("safeTxHash",  safeTxHash)