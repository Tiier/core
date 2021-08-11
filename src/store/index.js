import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import settings from './modules/settings'

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    // Global state (if any)
  },
  mutations: {
    // Global Mutations (if any)
  },
  actions: {
    // Global Actions (if any)
  },
  modules: {
    settings
  },
  plugins: [vuexLocal.plugin]
})
