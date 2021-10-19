<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
import Header from './components/header.vue'


export default {
  name: 'App',
  components: {
    Header,

  }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
