<template>
  <main>
    <NavBar />
    <slot />
    <Footer />
  </main>
</template>

<script>
import '../assets/styles/default.scss';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style lang="scss">
body,
html {
  height: 100%;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

section {
  transition: 0.25s filter ease-in-out;
  will-change: filter;
}
</style>
