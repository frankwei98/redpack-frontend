<template>
    <div id="send-ok">
        <h1 class="title"> Transacation Successful </h1>
        <h2 class="subtitle"> Share this Lucky Money page to your friends, collegues and customers now.</h2>
    </div>
</template>

<script>
export default {
  name: 'SendOK',
  props: {
    tx: String,
    amount: Number,
    qty: Number,
    redpackNumber: {default: ''}
  },
  computed: {
    getShareLink () {
      return `http://localhost:8080/#/claim/${this.redpackNumber}`
    },
    getSafeLink () {
      return encodeURIComponent(this.getShareLink)
    },
    getFB () {
      const { getSafeLink } = this
      return `https://www.facebook.com/sharer/sharer.php?u=${getSafeLink}`
    },
    getLine () {
      const { getSafeLink } = this
      return `https://social-plugins.line.me/lineit/share?url=${getSafeLink}`
    },
    getTwitter () {
      const { getSafeLink } = this
      const shareStr = `I sent you a red pack, check it out: ${getSafeLink}`
      return `https://twitter.com/intent/tweet?text=${shareStr}`
    },
    getWeibo () {
      const { getSafeLink } = this
      const shareStr = `I sent you a red pack, check it out: ${getSafeLink}`
      return `http://service.weibo.com/share/share.php?title=${shareStr}`
    }
  }
}
</script>

<style scoped>
#send-ok {
    text-align: center;
}
</style>
