<template>
  <FullScreenHero fixed>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-01.jpg" alt="" immediate />
    </template>
    <template v-slot:body>
      <b-container>
        <b-row class="py-4">
          <b-col cols="6">
            <h2>Services</h2>
            <b-row>
              <b-col cols="2">
                <hr class="my-2" />
              </b-col>
              <b-col>
                <h3>Pride in each service</h3>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="py-4">
          <b-col cols="6">
            <b-media>
              <g-image
                slot="aside"
                width="64"
                alt="placeholder"
                src="~/assets/images/icon-01.png"
              />
              <h4>Haircuts</h4>
              <p>
                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur.
              </p>
            </b-media>
            <b-media>
              <g-image
                slot="aside"
                width="64"
                alt="placeholder"
                src="~/assets/images/icon-02.png"
              />
              <h4>Shaves</h4>
              <p>
                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur.
              </p>
            </b-media>
            <b-media>
              <g-image
                slot="aside"
                width="64"
                alt="placeholder"
                src="~/assets/images/icon-03.png"
              />
              <h4>Beard Trim</h4>
              <p>
                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur.
              </p>
            </b-media>
            <b-media>
              <g-image
                slot="aside"
                width="64"
                alt="placeholder"
                src="~/assets/images/icon-04.png"
              />
              <h4>Mustache Trim</h4>
              <p>
                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur.
              </p>
            </b-media>
          </b-col>
        </b-row>
        <b-button @click="" class="mt-4 py-3 px-5 custom-button">
          All Services
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
</style>
