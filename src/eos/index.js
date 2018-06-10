
// TODO
import eosJS from 'eosjs'

const privKey = '5KcWPx2YK3vU5Ek2e1QQWesadGfSckoKvdqf1jmzZ5iYBsRsZbA'

let contractName = 'ttedddddd4ft'
let accountName = 'red4'

const EOSJS_CONFIG = {
  contractName, // 合约名字
  contractSender: accountName, // 执行合约的账户 (需要与私钥对应)
  clientConfig: {
    keyProvider: privKey, // 账号对应的私钥
    httpEndpoint: 'http://10.101.2.9:8888' // EOS节点程序的http终端
  }
}

let eosjs = eosJS(EOSJS_CONFIG.clientConfig)

export async function sendMoney ({ total, pplLimit, msg, diff, lat, lng, radius }) {
  let _sender = accountName
  const contract = await eosjs.contract(contractName)
  console.log(total)
  console.log(contract)
  total = Number(total)
  total = `${total.toFixed(4)} EOS`
  const lati = lat * 10000000
  const longti = lng * 10000000
  const result = await contract.sent(_sender, total, pplLimit,
    diff, 24 * 60 * 60, msg, lati, longti, radius,
    { authorization: [_sender] })
  console.log(result)
  return result
}

export async function claim (id) {
  const contract = await eosjs.contract(contractName)
  const result = await contract.take(accountName, id, { authorization: [accountName] })
  return result
}

export async function addwhitelist (redPackageId, target) {
  let _sender = accountName
  const contract = await eosjs.contract(contractName)
  const result = await contract.addwhitelist(_sender, redPackageId, target, { authorization: [accountName] })
  return result
}

export async function checkTable () {
  const contract = await eosjs.contract(contractName)
  console.log(contract)
  // total = ``
  const { rows } = await eosjs.getTableRows({
    'scope': contractName,
    'code': contractName,
    'table': 'red',
    'json': true
  })
  console.log(rows)
  return rows
}
