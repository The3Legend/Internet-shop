<template>
  <div id="app">
    <Header/>
    <ProductCard/>
  </div>
</template>

<script>
import Header from './components/header.vue'
import ProductCard from './components/ProductCard'

export default {
  name: 'App',
  components: {
    Header,
    ProductCard,
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
