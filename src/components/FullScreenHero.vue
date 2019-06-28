<template>
  <section>
    <b-jumbotron
      class="d-flex flex-column justify-content-center mb-0 p-0"
      :class="overlay ? 'gradient-overlay' : ''"
      container-fluid
      text-variant="light"
    >
      <div :class="overlay ? 'img-under' : ''">
        <slot name="background" />
      </div>
      <SequentialEntrance animation="entranceFromTop" :delay="50" :className="classN">
        <slot name="body" />
      </SequentialEntrance>
    </b-jumbotron>
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
    classN() {
      return this.fixed ? `${this.className} position-absolute` : this.className;
    },
  },
  mounted() {
    if (this.fixed) {
      const bgImg = this.$el.querySelectorAll('.g-image')[0];
      console.log(bgImg.src);
      bgImg.classList.add('d-none');
      const fixedImg = document.createElement('img');
      fixedImg.style.width = '100%';
      fixedImg.style.height = '100vh';
      fixedImg.style.backgroundAttachment = 'fixed';
      fixedImg.style.backgroundImage = `url(${bgImg.src})`;
      fixedImg.style.backgroundPosition = 'center';
      fixedImg.style.backgroundSize = 'cover';
      bgImg.parentElement.append(fixedImg);
      console.log(fixedImg);
    }
  },
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
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
.jumbotron {
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
