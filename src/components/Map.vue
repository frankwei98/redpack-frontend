<template>
  <div id="map">
      <div class="notify" v-if="!location">
        <h1 class="title">Please enable geolocation setting for Maps</h1>
        <h2 class="subtitle"> For LBS red pack, we will need your geolocation info.
          <br> Please authorize the permission</h2>
        <el-button type="primary" @click="fetchLocation"> Authorize Geolocation Permission </el-button>
      </div>
      <GmapMap
      v-if="isGoogle && location"
        :center="getCoordinate"
        :zoom="zoom"
        map-type-id="roadmap"
        class="map">
        <GmapMarker v-for="(r,idx) in redpackData"
          v-bind:key="idx"
         :position="r.geo" :clickable="true"
         :draggable="true" @click="clickRedPack(r)"></GmapMarker>
        <GmapInfoWindow :position="location" :opened="true">
        You're here nearby.
      </GmapInfoWindow>
        </GmapMap>
  </div>

</template>

<script>
// import { amapManager } from 'vue-amap'
import { mapState, mapActions } from 'vuex'
export default {
  props: {
    zoom: Number,
    center: Array,
    mapProvider: {
      type: String,
      default: 'google',
      validator: function (value) {
        // must match any of them
        return ['google', 'amap'].indexOf(value) !== -1
      }
    },
    redpackData: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      location ({ location }) {
        return location
          ? { lat: location.latitude, lng: location.longitude }
          : null
      }
    }),

    getHeight () {
      const height = this.height || 300
      return `height: ${height}`
    },
    getCoordinate () {
      const { center } = this
      return { lat: center[1], lng: center[0] }
    },
    isAMap () {
      return this.mapProvider === 'amap'
    },
    isGoogle () {
      return this.mapProvider === 'google'
    }
  },
  name: 'Map',
  data: () => ({}),

  methods: {
    ...mapActions(['getGeolocation']),
    getMap () {
      // amap vue component
    },
    fetchLocation () {
      this.getGeolocation()
    },
    clickRedPack (params) {
      console.log(params)
      this.$router.push({ name: 'Claim', params })
    }
  }
}
</script>

<style scoped>
/* .amap-demo {
      height: 300px;
    } */
.map {
  height: 100%;
}
</style>
