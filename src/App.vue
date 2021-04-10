<template>
  <main id="app" :class="font">
    <nav id="nav">
      <label>
        <input type="checkbox" @change="disablePixelFont = !disablePixelFont">
        Disable Pixel Font
      </label>
    </nav>
    <router-view/>
  </main>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      disablePixelFont: false
    }
  },
  computed: {
    font () {
      return this.disablePixelFont
        ? 'pixel-disable'
        : 'pixel'
    }
  }
}
</script>

<style>
#nav {
  padding: 30px;
}
</style>
