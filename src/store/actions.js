import { getScatterInstance } from '@/eos/scatter'

export default {
  async getScatter ({ commit }) {
    const instance = await getScatterInstance()
    commit('setScatter', instance)
  }
}
