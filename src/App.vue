<template>
  <div id="app">
    <header-component />
    <div id="router-view">
      <router-view/>
    </div>
    <footer-component/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    'header-component': Header,
    'footer-component': Footer
  },
  name: 'App',
  methods: {
    ...mapActions(['getScatter', 'getGeolocation'])
  },
  async created () {
    this.getScatter()
    this.getGeolocation()
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
#router-view {
  width: 85%;
  margin: 1rem auto;
}
</style>
