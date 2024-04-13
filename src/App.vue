<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './cocktails/components/NavBar.vue'
import Footer from './cocktails/components/Footer.vue'
</script>

<template>
  <div id="routerAnchor"></div>
  <NavBar />
  <RouterView />
  <Footer />
</template>
