<template>
  <FullScreenHero fixed>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-04.jpg" alt="" immediate />
    </template>
    <template v-slot:body>
      <b-container>
        <b-row class="py-4">
          <b-col cols="6">
            <h2>Barbers</h2>
            <b-row>
              <b-col cols="2">
                <hr class="my-2" />
              </b-col>
              <b-col>
                <h3>Highly qualified barbers</h3>
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
          <b-col cols="3" class="mr-2">
            <g-image src="~/assets/images/barber-01.jpg" alt="Thomas" />
            <h4>Mustache Expert</h4>
            <p>Thomas is the founder and owner of the barbershop.</p>
          </b-col>
          <b-col cols="3" class="mx-2">
            <g-image src="~/assets/images/barber-02.jpg" alt="Edward" />
            <h4>Beard Trimmer</h4>
            <p>Edward has been in the barber industry for over 10 years.</p>
          </b-col>
          <b-col cols="3" class="ml-2">
            <g-image src="~/assets/images/barber-03.jpg" alt="Roy" />
            <h4>Hair Specialist</h4>
            <p>Roy it's very passionate, and he's been with us since 2010.</p>
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

<style lang="scss" scoped></style>
