##  Apus Service 

## Project Structure
<pre>
apus_service/
├── scripts/ :  contract lib 
│   ├── contract_lib.py: call for contract
│   ├── config.py: config.py
│   ├── ...
├── contracts: apus market contracts
├── migrations: truffle migrate scripts
├── truffle-config: truffle config
├── server.py: apus backend server main
├── requirement.txt: python dependencies
...
</pre>

### truffle:
`truffle migrate`

##  Usage:


### contract config

> rpc_url https://opbnb-testnet-rpc.bnbchain.org
> chain_id = 5611

|contract_name|contract_address||
|-|-|-|
|token|0xE3737145603EdC4907A58f76A2Ea393C649c940C||
|market|0x064Bd6237350ED0d151cf7f211f81E8FAbCB1C72||
|task|0x2CB6A7Bd8888452858F47c0dE611f398D3d36298||
