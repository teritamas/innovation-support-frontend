<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppHeader/>
  <main>
    <RouterView />
  </main>
  <AppFooter/>
</template>

<style>
 body {
    font-family: "M PLUS Rounded 1c";
    background: #f3f3f3;
 }
</style>