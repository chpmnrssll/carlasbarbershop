<template>
  <FullScreenHero fixed>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-03.jpg" alt="" immediate />
    </template>
    <template v-slot:body>
      <b-container>
        <b-row align-v="center">
          <b-col cols="6">
            <b-row>
              <b-col cols="2" class="pr-0">
                <hr class="my-2" />
              </b-col>
              <b-col>
                <h3 class="text-light">World-class men's haircuts</h3>
              </b-col>
            </b-row>

            <h1 class="text-light">For gentlemen on the go</h1>

            <hr class="my-2" />
            <b-media>
              <QuoteRight class="quote_right" slot="aside" />
              <blockquote class="text-light">
                If you keep walking past the barbers, eventually you'll get a haircut.
              </blockquote>
            </b-media>

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
import QuoteRight from '~/assets/images/quote_right.svg';

export default {
  components: {
    FullScreenHero,
    QuoteRight,
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1240px;
  padding-top: 15.625rem;
}
.quote_right {
  color: var(--light);
  fill: currentColor;
  width: 64px;
  height: 64px;
}
hr {
  border-top: 4px solid var(--light);
  opacity: 0.75;
}
</style>
