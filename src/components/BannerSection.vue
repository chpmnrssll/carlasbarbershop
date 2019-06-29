<template>
  <FullScreenHero fixed>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-03.jpg" alt="" immediate />
    </template>
    <template v-slot:body>
      <div class="container-fluid">
        <h3 class="text-light">World-class men's haircuts</h3>
        <h1 class="text-light">For gentlemen on the go</h1>
        <blockquote class="text-light">
          If you keep walking past the barbers, eventually you'll get a haircut.
        </blockquote>
        <b-button @click="" class="mt-4 py-3 px-5">
          Book an appointment
        </b-button>
      </div>
    </template>
  </FullScreenHero>
</template>

<script>
import FullScreenHero from './FullScreenHero.vue';

export default {
  components: {
    FullScreenHero,
  },
};
</script>

<style lang="scss" scoped></style>
