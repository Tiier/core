<template>
  <main id="app">
    <nav id="nav">
      <router-link to="/">Menu</router-link> |
      <router-link to="/play">Play</router-link> |
      <router-link to="/info">Info</router-link>
    </nav>
    <div class="container">
      <router-view/>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}
</style>
