<script setup>
  import Navbar from '../components/Navbar.vue'
  import Main from '../components/MainOption.vue'
  import Footer from "@/components/Footer.vue"
  import CAl_Test from "@/components/Cal_Test.vue"
</script>

<template>
  <!-- <CAl_Test/> -->
  <Navbar/>
  <Main/>
  <Footer/>
  
</template>

<style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
}</style>