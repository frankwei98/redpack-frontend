import { getScatter } from '@/eos/scatter'

export default {
  async getScatter ({ commit }) {
    const instance = await getScatter()
    commit('setScatter', instance)
  }
}
