<template>
  <div class="home">
    <div class="menu">
      <router-link class="btn" to="/play">
        Play
      </router-link>
      <router-link class="btn" to="/about">
        About
      </router-link>
      <router-link class="btn" to="/settings">
        Settings
      </router-link>
      <router-link class="btn" to="/reset">
        Reset
      </router-link>
      <router-link class="btn" to="/credits">
        Credits
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

.menu {
  display: flex;
  flex-flow: column wrap;
  align-content: space-around;
  width: 25%;
}

.btn {
  cursor: pointer;
  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
