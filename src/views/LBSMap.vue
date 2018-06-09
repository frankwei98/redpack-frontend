<template>
    <div id="map">
        <Map :zoom="zoom" :center="center" />
    </div>
</template>

<script>
import Map from '@/components/map'
export default {
  name: 'LBSMap',
  components: {
    Map
  },
  data () {
    return {
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
