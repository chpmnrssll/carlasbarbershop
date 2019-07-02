<template>
  <FullScreenHero>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-06.jpg" alt="" />
    </template>
    <template v-slot:body>
      <b-container class="py-4">
        <b-row class="py-4">
          <b-col cols="4" class="my-4">
            <h4 class="mb-4">Opening Hours</h4>
            <b-row class="footer-row py-2 mb-3 mx-0">
              <b-col class="text-light align-self-start px-0">
                <p class="mb-0">Monday – Friday</p>
              </b-col>
              <b-col class="text-light align-self-end text-right px-0">
                <p class="mb-0">9am – 5pm</p>
              </b-col>
            </b-row>
            <b-row class="footer-row py-2 mb-3 mx-0">
              <b-col class="text-light align-self-start px-0">
                <p class="mb-0">Saturday</p>
              </b-col>
              <b-col class="text-light align-self-end text-right px-0">
                <p class="mb-0">11am – 3pm</p>
              </b-col>
            </b-row>
            <b-row class="footer-row py-2 mb-3 mx-0">
              <b-col class="text-light align-self-start px-0">
                <p class="mb-0">Sunday</p>
              </b-col>
              <b-col class="text-light align-self-end text-right px-0">
                <p class="mb-0">Closed</p>
              </b-col>
            </b-row>
          </b-col>

          <b-col cols="4" class="my-4 offset-2">
            <h4 class="mb-4">Contact</h4>

            <b-row class="footer-row py-2 mb-3 mx-0">
              <b-col class="text-light align-self-start px-0">
                <p class="mb-0">Address</p>
              </b-col>
              <b-col cols="9" class="text-light align-self-end text-right px-0">
                <p class="mb-0">1 Fifth Avenue, New York, NY</p>
              </b-col>
            </b-row>
            <b-row class="footer-row py-2 mb-3 mx-0">
              <b-col class="text-light align-self-start px-0">
                <p class="mb-0">Phone</p>
              </b-col>
              <b-col class="text-light align-self-end text-right px-0">
                <p class="mb-0">+1 910-626-85255</p>
              </b-col>
            </b-row>
            <b-row class="footer-row py-2 mb-3 mx-0">
              <b-col class="text-light align-self-start px-0">
                <p class="mb-0">Email</p>
              </b-col>
              <b-col class="text-light align-self-end text-right px-0">
                <p class="mb-0">info@barber.com</p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="my-4">
            <h4 class="mb-4">Keep In Touch</h4>
            <div class="">
              <g-image src="~/assets/images/facebook.svg" alt="FaceBook" width="64" />
              <g-image src="~/assets/images/twitter.svg" alt="Twitter" width="64" />
              <g-image src="~/assets/images/google-plus.svg" alt="Google+" width="64" />
            </div>
          </b-col>
        </b-row>

        <b-row class="mt-5">
          <b-col cols="9">
            <p>Copyright © 2019 Carlas Barber Shop | All rights reserved</p>
          </b-col>
          <b-col>
            <g-link to="/admin">Netlify CMS</g-link>
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
section {
  background-color: #000000;
}
img {
  opacity: 0.5;
}
.footer-row {
  border-bottom: 1px solid var(--light);
}
</style>
