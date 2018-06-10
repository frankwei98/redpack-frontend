<template>
<el-menu
 class="el-menu-demo"
 :default-active="$route.path"
 mode="horizontal"
 @select="handleSelect"
 router>
  <el-menu-item index="/"> eos Red Packet </el-menu-item>
  <el-menu-item index="/home"> Home </el-menu-item>
  <el-menu-item index="/send"> Send Red Packet </el-menu-item>
  <el-menu-item index="/map"> Maps </el-menu-item>
<<<<<<< HEAD
  <!-- <el-menu-item index="/my"> My Red Pack </el-menu-item> -->
=======
  <el-menu-item index="/my"> My Red Packet </el-menu-item>
>>>>>>> 39f80fc0584bf734b4a0a85f0b10702ad0d369aa
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
