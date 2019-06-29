<template>
  <b-navbar
    class="px-0"
    :class="{ 'hide-navbar': !showNavbar && !showCollapse }"
    fixed="top"
    toggleable="lg"
  >
    <div class="container-fluid">
      <b-navbar-brand class="mx-0">
        <g-link to="/">
          <g-image alt="logo" immediate src="~/assets/images/logo-regular.png" />
        </g-link>
      </b-navbar-brand>

      <b-navbar-toggle class="mx-4" target="nav_collapse">
        <button class="hamburger hamburger--collapse" type="button">
          <span class="hamburger-box">
            <span class="hamburger-inner" />
          </span>
        </button>
      </b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse" v-model="showCollapse">
        <b-navbar-nav class="ml-auto px-4">
          <b-nav-item>
            <g-link class="px-2" to="/">Home</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="px-2" to="/about">About</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="px-2" to="/barbers">Barbers</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="px-2" to="/gallery">Gallery</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="px-2" to="/contact">Contact</g-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
/* eslint no-param-reassign: "error" */
import { mapActions, mapGetters } from 'vuex';

const OFFSET = 40;

export default {
  data() {
    return {
      showNavbar: true,
      showCollapse: false,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  computed: {
    ...mapGetters('user', {
      isLoggedIn: 'isLoggedIn',
    }),
  },
  watch: {
    showCollapse(val) {
      this.blurBackground(val);
    },
  },
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', this.onScroll, { passive: true });
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    ...mapActions('user', {
      updateUser: 'updateUser',
    }),
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
    blurBackground(val) {
      document
        .getElementById('app')
        .querySelectorAll('section')
        .forEach(el => {
          el.style.filter = val ? 'blur(12px)' : '';
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.container-fluid {
  max-width: 1240px;
}
.hide-navbar {
  transform: translate3d(0, -100%, 0);
}

nav {
  transform: translate3d(0, 0, 0);
  transition: 0.1s transform linear;

  .hamburger {
    .hamburger-inner,
    .hamburger-inner:after,
    .hamburger-inner:before {
      background-color: var(--light);
    }
  }
  .nav-link {
    a {
      color: var(--light);
      font-family: 'Montserrat', sans-serif;
      font-size: 100%;
      text-decoration: none;
      &:hover {
        color: var(--primary);
      }
      @media (max-width: 640px) {
        color: var(--light);
        text-shadow: 1px 2px 4px #00000088;
        font-size: 2rem;
      }
    }
  }

  #nav_collapse {
    background-image: linear-gradient(180deg, #00000000 0%, #00000088 100%);
    height: 100vh;
    transition: height 0.25s ease-out;

    // disable gradient > 640px
    @media (min-width: 640px) {
      background-image: none;
      height: auto;
      width: 100%;
    }
  }

  .active--exact {
    font-weight: bold;
  }
}
</style>
