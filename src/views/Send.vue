<template>
    <div id="send">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="Total">
     <el-input-number :min="0" v-model="form.total" label="Amount"></el-input-number>
  </el-form-item>
  <el-form-item label="Quantity">
     <el-input-number :min="1" v-model="form.qty" label="Quantity"></el-input-number>
  </el-form-item>
  <el-form-item label="Messages">
    <el-input v-model="form.message"
    placeholder="You can write down your best wishes (Optional)"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="danger" class="lucky-btn" @click="onSubmit">Send</el-button>
    <el-button @click="$router.go(-1)">Back</el-button>
  </el-form-item>
</el-form>
    </div>
</template>

<script>
export default {
  name: 'Send',
  data: () => ({
    form: {
      total: 0,
      qty: 1,
      message: ''
    }
  }),
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style scoped>
.lucky-btn {
    background: #f5222d
}
</style>
