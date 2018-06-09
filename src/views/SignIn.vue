<template>
    <div id="sign-in">
        <h1 class="title">Please use Scatter with Chrome </h1>
        <h2 class="subtitle">To continute, please sign in with scatter </h2>
        <el-button type="primary" @click="login" :disabled="!scatter"> Login with scatter </el-button>
        <el-button type="primary" @click="auth" :disabled="!scatter"> Auth </el-button>
        <p>{{credential}}</p>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import ecc from 'eosjs-ecc'
// import { getScatterInstance } from '@/eos/scatter';
export default {
  data: () => ({
    account: null,
    credential: null
  }),
  computed: {
    ...mapState(['scatter'])
  },
  methods: {
    async login () {
      const { scatter } = this
      if (scatter) {
        this.credential = await scatter.getIdentity()
      }
    },
    auth () {
      const { scatter } = this
      scatter
        .authenticate()
        .then(sig => {
          // This will return your `location.host`
          // signed with their Identity's private key.
          // It has already been validated, but you can validate it yourself as well using eosjs-ecc.
          console.info(sig)
          const result = ecc.verify(sig, 'http://127.0.0.1:1080', scatter.identity.publicKey)
          console.info(result)
        })
        .catch(err => console.log('auth err', err))
    }
  }
}
</script>
