const settings = {
  state: {
    pixelFont: true
  },

  mutations: {
    setSetting (state, { key, data }) {
      state[key] = data
    },

    toggleSetting (state, { key }) {
      state[key] = !state[key]
    }
  },

  actions: {
    fetchSettings ({ commit }) {
      // Grab settings from localstorage
    },

    saveSettings ({ state }) {
      // Save settings to localstorage
    }
  }
}

export default settings
