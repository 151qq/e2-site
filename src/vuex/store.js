import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const userStore = new Vuex.Store({
  state: {
    detailData: {},
    giftData: [],
    iosUrl: ''
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
    },
    setUrl (state, url) {
      state.iosUrl = url
    }
  },
  actions: {
    setDetail ({ commit }, detail) {
      commit('setDetail', detail)
    },
    setGift ({ commit }, gift) {
      commit('setGift', gift)
    },
    setUrl ({ commit }, url) {
      commit('setUrl', url)
    }
  }
})

export default userStore
