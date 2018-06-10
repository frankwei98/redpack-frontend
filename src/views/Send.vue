<template>
    <div id="send">
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="Total">
     <el-input style="width:180px" :min="0" v-model="form.total" label="Amount"></el-input> eos
  </el-form-item>
  <el-form-item label="Quantity">
     <el-input-number :min="1" v-model="form.qty" label="Quantity"></el-input-number>
  </el-form-item>
  <el-form-item label="Messages">
    <el-input v-model="form.message"
    placeholder="You can write down your best wishes (Optional)"></el-input>
  </el-form-item>
  <el-form-item label="Messages">
    <el-date-picker
      v-model="form.time"
      type="datetime"
      placeholder="选择日期时间">
    </el-date-picker>
  </el-form-item>
  <el-form-item>
    <el-button type="danger" class="lucky-btn" @click="onSubmit">Send</el-button>
    <el-button @click="$router.go(-1)">Back</el-button>
  </el-form-item>
</el-form>
<p>{{getTimeDiff}} s</p>
<div id="map"></div>
<el-button type="primary" @click="getMyLocation"> 获取定位 </el-button>
    </div>
</template>

<script>
import { sendMoney, checkTable } from '@/eos/'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Send',
  data: () => ({
    map: null,
    form: {
      total: 0,
      time: new Date(),
      qty: 1,
      message: ''
    },
    geo: {},
    length: 0
  }),
  computed: {
    ...mapState(['location']),
    getTimeDiff () {
      const now = new Date()
      const diff = this.form.time - now
      return parseInt(diff / 1000)
    }
  },
  async mounted () {
    const data = await checkTable()
    this.length = data.length + 1
    this.getGeolocation()
    setTimeout(this.initMap, 2000)
  },
  methods: {
    ...mapActions(['getGeolocation']),
    async onSubmit () {
      console.log('submit!')
      const { total, qty, message } = this.form
      var { lat, lng } = this.location
      this.geo = this.location
      lat = Number(lat).toFixed(7)
      lng = Number(lng).toFixed(7)
      const result = await sendMoney({
        total,
        pplLimit: qty,
        msg: message,
        diff: this.getTimeDiff,
        lat,
        lng,
        radius: 1000
      })
      console.log(result)
      if (result.broadcast) {
        this.$router.push({name: 'SendOK', params: {id: this.length}})
      }
    },
    getMyLocation () {
      this.initMap()
    },
    initMap () {
      // const { lat, lng } = this.location
      var myLatlng = this.location
      console.log(myLatlng)
      var map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: myLatlng
      })

      var marker = new window.google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Click to zoom'
      })

      map.addListener('click', e => {
        console.log(e)
        const lat = e.latLng.lat()
        const lng = e.latLng.lng()
        this.geo = { lat, lng }
        marker.setPosition(new window.google.maps.LatLng(lat, lng))
        console.log(`Your Lat is ${lat} Lng is ${lng}`)
      })
      this.map = map
    }
  }
}
</script>

<style scoped>
.lucky-btn {
  background: #f5222d;
}
#map {
  height: 12rem;
}
</style>
