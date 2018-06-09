<template>
    <div id="home">
        <h1 class="title">eos Red Pack</h1>
        <h2 class="subtitle">
          You can send lucky money to your <span class="changeTag">{{displayKins}}</span>
        </h2>
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
.changeTag {
  background: #303133;
  color: #F2F6FC;
}
.title {
  font-size: 4rem;
}
.subtitle {
  font-size: 2.5rem;
}
</style>
