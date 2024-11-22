# Usage:

## Create .env file
```
PK=           // private key of the signer and owner of safe account
SAFE_ACCOUNT= // safe account for executing transaction
URL=          // rpc node url
```
## Run
```
node index.js --rulesPath rules.json 
```
## Running against network with custom chain Id
This project is dependant on `@safe-global/sdk-starter-kit` library which includes information needed for different chains according to chain Id and contract addresses deployed on these chains. If you need to run against custom network, you have to modify dependencies in this library to fit your network.