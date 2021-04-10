<template>
  <div class="home">
    <div class="menu">
      <router-link to="/play">
        <button class="btn">Play</button>
      </router-link>
      <router-link to="/about">
        <button class="btn">About</button>
      </router-link>
      <button class="btn">Reset</button>
      <router-link to="/credits">
        <button class="btn">Credits</button>
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
  justify-content: space-around;
  width: 25%;
}

.btn {
  cursor: pointer;
  width: 50%;
  padding: 1rem;
  margin: 1rem auto 1rem auto;
}
</style>
