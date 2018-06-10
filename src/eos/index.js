
// TODO
import eosJS from 'eosjs'

const privKey = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'

let contractName = 'luckpoint.co'
let accountName = 'banker'

const EOSJS_CONFIG = {
  contractName: contractName, // 合约名字
  contractSender: accountName, // 执行合约的账户 (需要与私钥对应)
  clientConfig: {
    keyProvider: ['5JcziTgwUhQgKyvmvc4ygEPGonQPVrBYNTwezAg5UuJ7djyVDWQ'], // 账号对应的私钥
    httpEndpoint: 'http://127.0.0.1:8888' // EOS节点程序的http终端
  }
}

let eosjs = eosJS(EOSJS_CONFIG.clientConfig)

export function sendMoney ({total, pplLimit, msg, lat, lng, radius}) {
  let _sender = accountName
  eosjs.contract(contractName)
    .then((contract) => {
      contract.sent(_sender, total, pplLimit, msg, lat, lng, radius)
    })
}
