<template>
  <div id="app">
    <navigation/>
    <router-view/>
    <footerApp/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 63px;
}

</style>

<script>

import footerApp from '@/components/footerApp.vue'
import navigation from '@/components/navigation.vue'


export default {
  name: 'app',
  components: {
    navigation,
    footerApp
  }
}
</script>
