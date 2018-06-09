<template>
    <el-amap ref="map" vid="amapDemo"
    :amap-manager="amapManager"
    :center="center" :zoom="zoom"
    :plugin="plugin" :events="events"
    class="map">
      </el-amap>
</template>

<script>
import { amapManager } from 'vue-amap'
export default {
  props: {
    zoom: Number,
    center: Array,
    height: Number
  },
  computed: {
    getHeight () {
      const height = this.height || 300
      return `height: ${height}`
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
