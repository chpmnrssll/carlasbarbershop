<template>
  <FullScreenHero>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-05.jpg" alt="" />
    </template>
    <template v-slot:body>
      <b-container fluid>
        <h2>Pricing</h2>
        <h3>Best barber experience</h3>
        <b-row class="w-50">
          <p>
            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing deserum elit.
          </p>
          <b-col>
            <div class="container">
              <span class="text-left text-light">Trim your Beard</span>
              <span class="text-right text-light">From $10</span>
            </div>
            <div class="container">
              <span class="text-left text-light">Trim your Hair</span>
              <span class="text-right text-light">From $35</span>
            </div>
            <div class="container">
              <span class="text-left text-light">Beard Treatment</span>
              <span class="text-right text-light">From $50</span>
            </div>
            <div class="container">
              <span class="text-left text-light">Color your Beard</span>
              <span class="text-right text-light">From $55</span>
            </div>
            <div class="container">
              <span class="text-left text-light">Wax your Beard</span>
              <span class="text-right text-light">From $10</span>
            </div>
          </b-col>
        </b-row>
        <b-button @click="" class="mt-4 py-3 px-5 custom-button">
          All Prices
        </b-button>
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

<style lang="scss" scoped></style>
