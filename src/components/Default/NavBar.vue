<template>
  <b-navbar
    class="px-0"
    :class="{ 'hidden-navbar': !showNavbar && !showCollapse }"
    fixed="top"
    toggleable="md"
  >
    <div class="container-fluid">
      <b-navbar-brand class="mx-4">
        <g-link to="/agency">
          <g-image alt="logo" immediate src="../../assets/images/logo.png" width="40" />
        </g-link>
      </b-navbar-brand>

      <b-navbar-toggle class="mx-4" target="nav_collapse">
        <span class="hamburger-menu">=</span>
      </b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse" v-model="showCollapse">
        <b-navbar-nav class="ml-auto px-4">
          <b-nav-item>
            <g-link class="" to="/agency">Home</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/agency/practice">Our Practice</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/agency/reviews">Reviews</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/agency/appointments">Appointments</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/agency/directions">Directions & Map</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/agency/provider">Preferred Provider</g-link>
          </b-nav-item>
          <b-nav-item>
            <g-link class="" to="/agency/forms">Forms</g-link>
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
          el.style.filter = val ? 'blur(8px)' : '';
        });
    },
    triggerNetlifyIdentityAction(action) {
      if (action === 'login' || action === 'signup') {
        // this.$root.$options.netlifyIdentity.open(action);
        window.netlifyIdentity.open(action);
      } else if (action === 'logout') {
        // this.$root.$options.netlifyIdentity.logout();
        window.netlifyIdentity.logout();
        this.updateUser(null);
        // this.$router.push('/');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hidden-navbar {
  transform: translate3d(0, -100%, 0);
}

nav {
  background-color: white;
  transform: translate3d(0, 0, 0);
  transition: 0.1s transform linear;

  .hamburger-menu {
    // text-shadow: 0px 1px 2px #aaaaaa88, 1px 2px 3px #00000088;
  }
  .nav-link {
    a {
      color: var(--dark);
      font-size: 100%;
      text-decoration: none;
      &:hover {
        color: var(--primary);
      }
    }
    // @extend .hamburger-menu;
    // @media (max-width: 640px) {
    //   font-size: 2rem;
    // }
  }
  .container-fluid {
    max-width: 1240px;
  }

  #nav_collapse {
    background-image: linear-gradient(180deg, #00000000 0%, #00000088 100%);
    height: 100vh;
    transition: height 0.25s ease-out;

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
