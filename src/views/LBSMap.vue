<template>
    <div id="map">
        <Map :zoom="zoom" :center="center" :redpackData="RedPackData"/>
    </div>
</template>

<script>
import Map from '@/components/map'
import RedPackData from '@/fake/redpack.json'
export default {
  name: 'LBSMap',
  components: {
    Map
  },
  computed: {
  },
  data () {
    return {
      RedPackData,
      zoom: 15,
      center: [114.2129299, 22.3069002]
    }
  },

  methods: {
  }
}
</script>

<style scoped>
#map {
    height: 48rem;
}
</style>
