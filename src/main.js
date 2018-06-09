// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAMap from 'vue-amap'
import * as VueGoogleMaps from 'vue2-google-maps'
import ElementUI from 'element-ui'
import App from './App'
import store from './store'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(VueAMap)

// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '2b69fc6bfb4b1c63cc89d7a8054aaa1f',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
})
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDmSxo_gt0xx2AUqpL23OWYT3F9M0TS6eQ',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    /// / If you want to set the version, you can do so:
    // v: '3.26',
  }

  /// / If you intend to programmatically custom event listener code
  /// / (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  /// / instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  /// / you might need to turn this on.
  // autobindAllEvents: false,

  /// / If you want to manually install components, e.g.
  /// / import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  /// / Vue.component('GmapMarker', GmapMarker)
  /// / then disable the following:
  // installComponents: true,
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
