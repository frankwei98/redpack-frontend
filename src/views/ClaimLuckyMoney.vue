<template>
    <div id="claim-lucky-money">
        <h1 class="title">You're claiming #{{id}} red pack</h1>
        <h2 class="subtitle">Message: {{msg}} </h2>
        <button class="open" @click="openPack">open</button>
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
          this.$alert('success', 'successful claim your red packet', {
            confirmButtonText: 'confirm',
            callback: action => {
              this.$message({
                type: 'success',
                message: `you've claimed your red packet, please come back and check your balance latert`
              })
            }
          })
        }
      } catch (error) {
        this.$alert('it is not available right now, please come back and check when it starts', 'failed', {
          confirmButtonText: 'confirm',
          callback: action => {
            this.$message({
              type: 'error',
              message: `it is not available right now`
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
