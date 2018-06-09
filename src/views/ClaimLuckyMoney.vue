<template>
    <div id="claim-lucky-money">
        <h1 class="title">You're claiming #{{id}} red pack</h1>
        <h2 class="subtitle">Message: {{msg}} </h2>
        <button class="open">拆</button>
    </div>
</template>

<script>
export default {
  computed: {
    id () {
      return this.$route.params.id
    },
    msg () {
      return '1145141919810'
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
    text-align: center
}
</style>
