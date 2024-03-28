<script setup>
  import Navbar from '../components/Navbar.vue'
  import Wait from '../components/Wait.vue'
  import Footer from "@/components/Footer.vue"
</script>

<template>
  <!-- <CAl_Test/> -->
  <Navbar/>
  <Wait/>
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