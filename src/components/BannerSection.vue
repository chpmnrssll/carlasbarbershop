<template>
  <FullScreenHero fixed>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-03.jpg" alt="" immediate />
    </template>
    <template v-slot:body>
      <b-container fluid>
        <b-row>
          <b-col cols="6">
            <h3 class="text-light">World-class men's haircuts</h3>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <h1 class="text-light">For gentlemen on the go</h1>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <blockquote class="text-light">
              If you keep walking past the barbers, eventually you'll get a haircut.
            </blockquote>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="6">
            <b-button @click="" class="mt-4 py-3 px-5 custom-button">
              Book an appointment
            </b-button>
          </b-col>
        </b-row>
      </b-container>
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

<style lang="scss" scoped>
.row {
  max-width: 1240px;
}
</style>
