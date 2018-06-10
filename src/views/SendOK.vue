<template>
    <div id="send-ok">
        <h1 class="title"> Transacation Successful </h1>
        <h2 class="subtitle"> Share this Red Pack page to your friends, collegues and customers now.</h2>
        <!-- <input type="text" :value="getShareLink"> -->
        <el-input v-model="getShareLink" disabled></el-input>
        <el-button class="btn" type="primary" :data-clipboard-text="getShareLink"> Copy the link </el-button>
    </div>
</template>

<script>
import ClipboardJS from 'clipboard'
export default {
  name: 'SendOK',
  mounted () {
    var clipboard = new ClipboardJS('.btn')
    clipboard.on('success', function (e) {
      console.info('Action:', e.action)
      console.info('Text:', e.text)
      console.info('Trigger:', e.trigger)
      e.clearSelection()
    })
  },
  computed: {
    id () {
      return this.$route.params.id
    },
    getShareLink () {
      return `http://localhost:8080/#/claim/${this.id}`
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
