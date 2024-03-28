<script setup>
  import Navbar from '../components/Navbar.vue'
  import Check from '../components/CheckStatus.vue'
  import Footer from "@/components/Footer.vue"
</script>

<template>
  <Navbar/>
  <Check/>
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