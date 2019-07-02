<template>
  <FullScreenHero>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-02.jpg" alt="" />
    </template>
    <template v-slot:body>
      <b-container>
        <b-row class="py-4">
          <b-col cols="6">
            <h2>About</h2>
            <b-row>
              <b-col cols="2">
                <hr class="my-2" />
              </b-col>
              <b-col>
                <h3>Perfect haircuts</h3>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="py-4">
          <b-col cols="6">
            <h4>
              I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.
            </h4>
          </b-col>
        </b-row>

        <b-row class="py-4">
          <b-col cols="3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </b-col>
          <b-col cols="3">
            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.
          </b-col>
        </b-row>
        <b-button @click="" class="mt-4 py-3 px-5 custom-button">
          Read More
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
  padding-top: 2rem;
}
</style>
