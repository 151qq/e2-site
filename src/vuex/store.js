import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userStore = new Vuex.Store({
  state: {
    detailData: {},
    giftData: []
  },
  getters: {
    getDetail (state) {
      return state.detailData
    },
    getGift (state) {
      return state.giftData
    }
  },
  mutations: {
    setDetail (state, detailData) {
      state.detailData = detailData
    },
    setGift (state, giftData) {
      state.giftData = giftData
    }
  },
  actions: {
    setDetail ({ commit }, detail) {
      commit('setDetail', detail)
    },
    setGift ({ commit }, gift) {
      commit('setGift', gift)
    }
  }
})

export default userStore
