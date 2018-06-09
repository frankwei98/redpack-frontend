<template>
    <div id="home">
        <h1>EOS Lucky</h1>
        <h2>Tokens for LUCKY</h2>
        <h1> You can send lucky money to your</h1>
        <h1> {{displayKins}} </h1>
        <el-button type="primary" @click="jumpTo('Send')"> Send Now </el-button>
    </div>
</template>

<script>
export default {
  data: () => ({
    peoples: ['friends', 'families', 'colleagues', 'customers'],
    count: 0
  }),
  created () {
    setInterval(this.changePeople, 2000)
  },
  computed: {
    displayKins () {
      const { peoples, count } = this
      return peoples[count]
    }
  },
  methods: {
    changePeople () {
      if (this.count < this.peoples.length - 1) {
        this.count++
      } else {
        this.count = 0
      }
    },
    jumpTo (name) {
      this.$router.push({name})
    }
  }
}
</script>

<style scoped>
</style>
