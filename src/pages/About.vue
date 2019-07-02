<template>
  <DefaultLayout>
    <FullScreenHero section-height="66.666vh" id="AboutHeader">
      <template v-slot:background>
        <g-image src="~/assets/images/bg-img-08.jpg" alt="" />
      </template>
      <template v-slot:body>
        <b-container class="hero-content">
          <b-row>
            <b-col cols="1">
              <hr class="my-2" />
            </b-col>
            <b-col cols="6">
              <h3>World-class men's haircuts</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <h1>About</h1>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </FullScreenHero>

    <FullScreenHero fixed>
      <template v-slot:background>
        <g-image src="~/assets/images/bg-img-07.jpg" alt="" immediate />
      </template>
      <template v-slot:body>
        <b-container class="my-5 py-5">
          <b-row>
            <b-col cols="6" class="py-4">
              <h2>Who we are</h2>
              <b-row>
                <b-col cols="2">
                  <hr class="my-2" />
                </b-col>
                <b-col>
                  <h3>Professional Barbers</h3>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6 py-4">
              <p>
                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus, luctus nec.
              </p>
            </b-col>
            <b-col cols="6">
              <p>
                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                dapibus leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus
                condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin
                condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris
                egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Proin
                gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. vulputate cursus a
                sit amet mauris. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                elit.
              </p>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </FullScreenHero>
  </DefaultLayout>
</template>

<script>
import FullScreenHero from '../components/FullScreenHero.vue';

export default {
  components: {
    FullScreenHero,
  },
  metaInfo: {
    title: 'About',
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1240px;
}
.hero-content {
  padding-top: 15.625rem;
}
#AboutHeader {
  background-color: #000000;
  .g-image {
    opacity: 0.5;
  }
}
</style>
