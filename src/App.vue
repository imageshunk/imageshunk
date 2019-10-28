<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar, Footer
  }
}
</script>

<style>
.bg-dark{
  background-color: #050624 !important;
}
</style>
