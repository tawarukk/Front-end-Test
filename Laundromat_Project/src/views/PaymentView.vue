<script setup>
  import Navbar from '../components/Navbar.vue'
  import Payment from '../components/Payment-Cash.vue'
  import Footer from "@/components/Footer.vue"
</script>

<template>
    <Navbar/>
    <Payment/>
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