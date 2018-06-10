<template>
    <div id="map">
        <Map :zoom="zoom" :center="center" :redpackData="points"/>
    </div>
</template>

<script>
import Map from '@/components/map'
import { checkTable } from '@/eos'

// import RedPackData from '@/fake/redpack.json'
export default {
  name: 'LBSMap',
  components: {
    Map
  },
  computed: {
    points () {
      return this.RedPackData.map(({ lat, lng, ...rest }) => {
        lat /= 10000000
        lng /= 10000000
        const geo = { lat, lng }
        return Object.assign(rest, {geo})
      })
    }
  },
  data () {
    return {
      RedPackData: [],
      zoom: 15,
      center: [114.2129299, 22.3069002]
    }
  },
  mounted () {
    this.fetchData()
    // this.initMap()
    setTimeout(this.initMap, 1000)
  },
  methods: {
    async fetchData () {
      this.RedPackData = await checkTable()
    }

  }
}

</script>

<style scoped>
#map {
  height: 48rem;
}
</style>
