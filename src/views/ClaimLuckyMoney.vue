<template>
    <div id="claim-lucky-money">
        <h1 class="title">You're claiming #{{id}} red pack</h1>
        <h2 class="subtitle">Message: {{msg}} </h2>
        <button class="open" @click="openPack">拆</button>
    </div>
</template>

<script>
import { claim, checkTable } from '@/eos'
export default {
  data: () => ({
    msg: ''
  }),
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  async mounted () {
    const data = await checkTable()
    console.log(data)
    this.msg = data[this.id - 1].description
  },
  methods: {
    async openPack () {
      try {
        const result = await claim(this.id)
        console.log(result)
        if (result.broadcast) {
          this.$alert('领取成功', '红包领取成功', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'success',
                message: `领取操作已经广播，请稍后检查账户余额`
              })
            }
          })
        }
      } catch (error) {
        this.$alert('时间未到，请确认开始时间', '领取失败', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'error',
              message: `时候未到`
            })
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.open {
  width: 5rem;
  height: 5rem;
  font-size: 3rem;
  border-radius: 100%;
  background: #fadb14;
  color: #262626;
  border-color: #fff566;
}
#claim-lucky-money {
  text-align: center;
}
</style>
