<template>
  <section>
    <b-container
      class="d-flex flex-column justify-content-center mb-0 p-0"
      :class="overlay ? 'gradient-overlay' : ''"
      fluid
    >
      <div :class="overlay ? 'img-under' : ''">
        <slot name="background" />
      </div>
      <SequentialEntrance animation="entranceFromTop" :delay="50" :className="fixedClass">
        <slot name="body" />
      </SequentialEntrance>
    </b-container>
  </section>
</template>

<script>
import SequentialEntrance from './SequentialEntrance.vue';

export default {
  components: {
    SequentialEntrance,
  },
  props: {
    className: { type: String, default: '' },
    fixed: { type: Boolean, default: false },
    overlay: { type: Boolean, default: false },
  },
  computed: {
    fixedClass() {
      const addClass = 'position-absolute p-0 FullScreenHero-body';
      return this.fixed ? `${this.className} ${addClass}` : this.className;
    },
  },
  mounted() {
    if (this.fixed) {
      // set this sections' height to match .FullScreenHero-body
      const body = this.$el.querySelector('.FullScreenHero-body');
      const height = parseInt(window.getComputedStyle(body).height, 10);
      this.$el.style.height = `${height}px`;

      // hide the original g-image
      const bgImg = this.$el.querySelector('.g-image');
      bgImg.classList.add('d-none');

      // build a new blank img with src as a css background-image
      const fixedImg = document.createElement('img');
      fixedImg.style.width = '100%';
      fixedImg.style.height = `${height}px`;
      fixedImg.style.backgroundAttachment = 'fixed';
      fixedImg.style.backgroundImage = `url(${bgImg.src})`;
      fixedImg.style.backgroundPosition = 'center';
      fixedImg.style.backgroundSize = 'cover';
      fixedImg.alt = bgImg.alt;
      bgImg.parentElement.append(fixedImg);
    }
  },
};
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;
  width: 100%;
}
.g-image {
  left: 0;
  min-height: 100%;
  object-fit: cover;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
}
.img-under {
  z-index: -1;
}
.container-fluid {
  background-color: transparent;
  background-image: linear-gradient(225deg, var(--primaryBlue) 0%, var(--primaryGreen) 65%);
  border-radius: 0 !important;
  left: 0;
  min-height: 100%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.gradient-overlay {
  background-image: linear-gradient(225deg, var(--primaryBlueA) 0%, var(--primaryGreenA) 65%);
}
</style>
