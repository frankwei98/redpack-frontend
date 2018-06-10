import { getScatterInstance } from '@/eos/scatter'

const getCurrentPosition = (options = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}

export default {
  async getScatter ({ commit }) {
    const instance = await getScatterInstance()
    commit('setScatter', instance)
  },
  async getGeolocation ({ commit }) {
    // const options = {
    //   enableHighAccuracy: true, // defaults to false
    //   timeout: Infinity, // defaults to Infinity
    //   maximumAge: 0 // defaults to 0
    // }
    // const location = await VueGeolocation(options)
    // const position = await getCurrentPosition()
    // const { latitude, longitude } = position.coords
    commit('setGeolocation', { lat: 22.3053797, lng: 114.2093172 })
  }
}
