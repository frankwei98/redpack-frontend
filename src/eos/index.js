
// TODO
import eosJS from 'eosjs'

const clientConfig = {
  keyProvider: ['5JcziTgwUhQgKyvmvc4ygEPGonQPVrBYNTwezAg5UuJ7djyVDWQ'], // 账号对应的私钥
  httpEndpoint: 'http://127.0.0.1:8888' // eos节点程序的http终端
}

const eosjs = eosJS.Localnet(clientConfig)
eosjs.contract()
