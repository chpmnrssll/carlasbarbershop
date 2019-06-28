<template>
  <DefaultLayout>
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

    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/bg-img-02.jpg" alt="" />
      </template>
      <template v-slot:body>
        <div class="container-fluid">
          <h2 class="text-light">About</h2>
          <h3 class="text-light">Perfect haircuts</h3>
          <b-row class="w-50">
            <b-col>
              <p>
                I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
                pulvinar.
              </p>
            </b-col>
          </b-row>
          <b-row class="w-50">
            <b-col>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </b-col>
            <b-col>
              I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
              dapibus leo.
            </b-col>
          </b-row>
          <b-button @click="" class="mt-4 py-3 px-5">
            Read More
          </b-button>
        </div>
      </template>
    </FullScreenHero>

    <FullScreenHero fixed>
      <template v-slot:background>
        <g-image src="~/assets/images/bg-img-01.jpg" alt="" immediate />
      </template>
      <template v-slot:body>
        <div class="container-fluid">
          <h2 class="text-light">Services</h2>
          <h3 class="text-light">Pride in each service</h3>
          <b-row class="w-50">
            <b-col>
              <b-media>
                <g-image
                  slot="aside"
                  width="64"
                  alt="placeholder"
                  src="~/assets/images/icon-01.png"
                />
                <h4 class="text-light">Haircuts</h4>
                <p>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur.
                </p>
              </b-media>
              <b-media>
                <g-image
                  slot="aside"
                  width="64"
                  alt="placeholder"
                  src="~/assets/images/icon-02.png"
                />
                <h4 class="text-light">Shaves</h4>
                <p>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur.
                </p>
              </b-media>
              <b-media>
                <g-image
                  slot="aside"
                  width="64"
                  alt="placeholder"
                  src="~/assets/images/icon-03.png"
                />
                <h4 class="text-light">Beard Trim</h4>
                <p>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur.
                </p>
              </b-media>
              <b-media>
                <g-image
                  slot="aside"
                  width="64"
                  alt="placeholder"
                  src="~/assets/images/icon-04.png"
                />
                <h4 class="text-light">Mustache Trim</h4>
                <p>
                  I am text block. Click edit button to change this text. Lorem ipsum dolor sit
                  amet, consectetur.
                </p>
              </b-media>
            </b-col>
          </b-row>
          <b-button @click="" class="mt-4 py-3 px-5">
            All Services
          </b-button>
        </div>
      </template>
    </FullScreenHero>

    <FullScreenHero>
      <template v-slot:background>
        <g-image src="~/assets/images/bg-img-05.jpg" alt="" />
      </template>
      <template v-slot:body>
        <div class="container-fluid">
          <h2 class="text-light">Pricing</h2>
          <h3 class="text-light">Best barber experience</h3>
          <b-row class="w-50">
            <p>
              I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing deserum elit.
            </p>
            <b-col>
              <div class="container">
                <span class="text-left">Trim your Beard</span>
                <span class="text-right">From $10</span>
              </div>
              <div class="container">
                <span class="text-left">Trim your Hair</span>
                <span class="text-right">From $35</span>
              </div>
              <div class="container">
                <span class="text-left">Beard Treatment</span>
                <span class="text-right">From $50</span>
              </div>
              <div class="container">
                <span class="text-left">Color your Beard</span>
                <span class="text-right">From $55</span>
              </div>
              <div class="container">
                <span class="text-left">Wax your Beard</span>
                <span class="text-right">From $10</span>
              </div>
            </b-col>
          </b-row>
          <b-button @click="" class="mt-4 py-3 px-5">
            All Prices
          </b-button>
        </div>
      </template>
    </FullScreenHero>

    <FullScreenHero fixed>
      <template v-slot:background>
        <g-image src="~/assets/images/bg-img-04.jpg" alt="" immediate />
      </template>
      <template v-slot:body>
        <div class="container-fluid">
          <h2 class="text-light">Barbers</h2>
          <h3 class="text-light">Highly qualified barbers</h3>
          <b-row class="w-50">
            <p>
              I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing deserum elit.
            </p>
            <b-col>
              <g-image src="~/assets/images/icon-01.png" />
              <h4>Mustache Expert</h4>
              <p>Thomas is the founder and owner of the barbershop.</p>
            </b-col>
            <b-col>
              <g-image src="~/assets/images/icon-02.png" />
              <h4>Beard Trimmer</h4>
              <p>Edward has been in the barber industry for over 10 years.</p>
            </b-col>
            <b-col>
              <g-image src="~/assets/images/icon-03.png" />
              <h4>Hair Specialist</h4>
              <p>Roy it's very passionate, and he's been with us since 2010.</p>
            </b-col>
          </b-row>
        </div>
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
    title: 'Carlas Barber Shop',
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  max-width: 1240px;
}
h1 {
  font-family: 'Montserrat', sans-serif;
  font-size: 5.733rem;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  max-width: 50%;
}
h2 {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 5.6rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  max-width: 50%;
}
h3 {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
}
blockquote {
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 1.866rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  max-width: 34%;
}
button {
  background-color: transparent;
  border: none;
  border-color: var(--light);
  border-style: solid;
  border-top-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-left-width: 0;
  font-family: 'Open Sans Condensed', sans-serif;
  font-size: 100%;
  font-weight: inherit;
  letter-spacing: 4px;
  line-height: 1.875rem;
  text-transform: uppercase;
  &:hover {
    background-color: transparent;
    border-color: var(--primary);
  }
}
#banner {
  position: relative;
  top: -12.5%;

  @media (max-width: 640px) {
    top: 0;
  }

  .container-fluid {
    background-color: var(--primary);
  }
  h2 {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.333rem;
    font-weight: 600;
    line-height: 1.5;
    text-transform: capitalize;
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 100%;
  }
  .svg-icon {
    // stroke: #f8f9fa;
  }
}
</style>
