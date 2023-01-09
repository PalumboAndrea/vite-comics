<script setup>
import DCFooter from './components/DCFooter.vue';
import DCHeader from './components/DCHeader.vue';
import DCMain from './components/DCMain.vue';
</script>

<template>
  <header>
    <DCHeader />
  </header>

  <main>
    <DCMain />
  </main>
  
  <footer>
    <DCFooter />
  </footer>

</template>

<style lang="scss">

@use './styles/partials/variable';
@use './bootstrap/scss/bootstrap.scss';
@use './styles/general';

</style>
