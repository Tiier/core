<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/200.png">
    <Basic msg="A Basic Home Page!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Basic from '@/components/Basic.vue'

export default {
  name: 'Home',
  components: {
    Basic
  }
}
</script>
