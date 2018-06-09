<template>
<el-menu
 class="el-menu-demo"
 :default-active="$route.path"
 mode="horizontal"
 @select="handleSelect"
 router>
  <el-menu-item index="/"> EOS Lucky Money </el-menu-item>
  <el-menu-item index="/home"> Home </el-menu-item>
  <el-menu-item index="/send"> Send Lucky Money </el-menu-item>
  <el-menu-item index="/map"> Maps </el-menu-item>
</el-menu>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    handleSelect (key, keyPath) {
      console.info(key, keyPath)
    }
  }
}
</script>
