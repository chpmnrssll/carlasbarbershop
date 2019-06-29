<template>
  <FullScreenHero fixed>
    <template v-slot:background>
      <g-image src="~/assets/images/bg-img-04.jpg" alt="" immediate />
    </template>
    <template v-slot:body>
      <b-container fluid>
        <h2>Barbers</h2>
        <h3>Highly qualified barbers</h3>
        <b-row class="w-50">
          <p>
            I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing deserum elit.
          </p>
          <b-col>
            <g-image src="~/assets/images/barber-01.jpg" />
            <h4>Mustache Expert</h4>
            <p>Thomas is the founder and owner of the barbershop.</p>
          </b-col>
          <b-col>
            <g-image src="~/assets/images/barber-02.jpg" />
            <h4>Beard Trimmer</h4>
            <p>Edward has been in the barber industry for over 10 years.</p>
          </b-col>
          <b-col>
            <g-image src="~/assets/images/barber-03.jpg" />
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
