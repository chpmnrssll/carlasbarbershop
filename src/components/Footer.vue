<template>
  <FullScreenHero>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-06.jpg" alt="" />
    </template>
    <template v-slot:body>
      <div class="container-fluid">
        <b-row>
          <b-col>
            <h2 class="mb-4">Opening Hours</h2>
            <p>Monday – Friday……………………………….9am – 5pm</p>
            <p>Saturday………………………………………….11am – 3pm</p>
            <p>Sunday……………………………………………………..Closed</p>
          </b-col>
          <b-col>
            <h2 class="mb-4">Contact</h2>
            <p>Address…………………1 Fifth Avenue, New York, NY</p>
            <p>Phone……………………………………….+1 910-626-85255</p>
            <p>Email………………………………………..info@barber.com</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h2 class="mb-4">Keep In Touch</h2>
            <div class="">
              <g-link>FaceBook</g-link>
            </div>
            <div class="">
              <g-link>Twitter</g-link>
            </div>
            <div class="">
              <g-link>Google+</g-link>
            </div>
          </b-col>
        </b-row>

        <div class="copyright d-flex justify-content-between">
          <p>Copyright © 2019 Carlas Barber Shop | All rights reserved</p>
          <g-link class="nav--link" to="/admin">Netlify CMS</g-link>
        </div>
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

<style lang="scss" scoped>
.copyright {
  height: 100%;
}
section {
  background-color: #000000;
}
img {
  opacity: 0.5;
}
h2 {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1.866rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}
p {
  font-family: 'Montserrat', sans-serif;
  font-size: 100%;
  line-height: 1.857;
}
</style>
