<template>
  <div id="map">
        <el-amap ref="map" vid="amapDemo"
        v-if="isAMap"
    :amap-manager="amapManager"
    :center="center" :zoom="zoom"
    :plugin="plugin" :events="events"
    class="map"></el-amap>
      <GmapMap
      v-if="isGoogle"
        :center="getCoordinate"
        :zoom="zoom"
        map-type-id="roadmap"
        class="map"
        />
  </div>

</template>

<script>
import { amapManager } from 'vue-amap'
export default {
  props: {
    zoom: Number,
    center: Array,
    mapProvider: {
      type: String,
      default: 'google'
    }
  },
  computed: {
    getHeight () {
      const height = this.height || 300
      return `height: ${height}`
    },
    getCoordinate () {
      const {center} = this
      return {lat: center[1], lng: center[0]}
    },
    isAMap () {
      return this.mapProvider === 'amap'
    },
    isGoogle () {
      return this.mapProvider === 'google'
    }
  },
  name: 'Map',
  data () {
    return {
      amapManager,
      events: {
        init: o => {
          console.log(o.getCenter())
          console.log(this.$refs.map.$$getInstance())
          o.getCity(result => {
            console.log(result)
          })
        },
        moveend: () => {},
        zoomchange: () => {},
        click: e => {
          alert('map clicked')
        }
      },
      plugin: [
        'ToolBar',
        {
          pName: 'MapType',
          defaultType: 0,
          events: {
            init (o) {
              console.log(o)
            }
          }
        }
      ]
    }
  },

  methods: {
    getMap () {
      // amap vue component
      console.log(amapManager._componentMap)
      // gaode map instance
      console.log(amapManager._map)
    }
  }
}
</script>

<style scoped>
    /* .amap-demo {
      height: 300px;
    } */
    .map {
        height: 100%
    }
</style>
