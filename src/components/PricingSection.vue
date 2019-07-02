<template>
  <FullScreenHero>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-05.jpg" alt="" />
    </template>
    <template v-slot:body>
      <b-container>
        <b-row class="py-4">
          <b-col cols="6">
            <h2>Pricing</h2>
            <b-row>
              <b-col cols="2">
                <hr class="my-2" />
              </b-col>
              <b-col>
                <h3>Best barber experience</h3>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="py-4">
          <b-col cols="6">
            <h4>
              I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing deserum elit.
            </h4>
          </b-col>
        </b-row>

        <b-row class="py-4">
          <b-col cols="6">
            <b-row class="price-list-row py-2 mb-4">
              <b-col class="text-light align-self-start px-0">Trim your Beard</b-col>
              <b-col class="text-light align-self-end text-right px-0">From $10</b-col>
            </b-row>
            <b-row class="price-list-row py-2 mb-4">
              <b-col class="text-light align-self-start px-0">Trim your Hair</b-col>
              <b-col class="text-light align-self-end text-right px-0">From $35</b-col>
            </b-row>
            <b-row class="price-list-row py-2 mb-4">
              <b-col class="text-light align-self-start px-0">Beard Treatment</b-col>
              <b-col class="text-light align-self-end text-right px-0">From $50</b-col>
            </b-row>
            <b-row class="price-list-row py-2 mb-4">
              <b-col class="text-light align-self-start px-0">Color your Beard</b-col>
              <b-col class="text-light align-self-end text-right px-0">From $55</b-col>
            </b-row>
            <b-row class="price-list-row py-2 mb-4">
              <b-col class="text-light align-self-start px-0">Wax your Beard</b-col>
              <b-col class="text-light align-self-end text-right px-0">From $10</b-col>
            </b-row>
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

<style lang="scss" scoped>
.container {
  padding-bottom: 4rem;
  padding-top: 4rem;
}
.price-list-row {
  border-bottom: 2px solid var(--light);
}
</style>
