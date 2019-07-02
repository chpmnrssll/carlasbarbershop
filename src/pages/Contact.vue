<template>
  <DefaultLayout>
    <FullScreenHero section-height="66.666vh" id="ContactHeader">
      <template v-slot:background>
        <g-image src="~/assets/images/bg-img-10.jpg" alt="" />
      </template>
      <template v-slot:body>
        <b-container class="hero-content">
          <b-row>
            <b-col cols="1">
              <hr class="my-2" />
            </b-col>
            <b-col cols="6">
              <h3>Let's get in touch</h3>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              <h1>Contact</h1>
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
              <h2>Say Hello</h2>
              <b-row>
                <b-col cols="2">
                  <hr class="my-2" />
                </b-col>
                <b-col>
                  <h3>Send Us A Message</h3>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6 py-4">
              <p>
                I AM TEXT BLOCK. CLICK EDIT BUTTON TO CHANGE THIS TEXT. LOREM IPSUM DOLOR SIT AMET,
                CONSECTETUR ADIPISCING ELIT. UT ELIT TELLUS, LUCTUS NEC.
              </p>
            </b-col>
            <b-col cols="6">
              <b-form
                name="contact"
                method="post"
                @submit.prevent="handleSubmit"
                action="/success/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="name" value="contact" />
                <p hidden>
                  <label> Don’t fill this out: <input name="bot-field" /> </label>
                </p>
                <b-form-group id="input-group-2" label="Name:" label-for="form-name">
                  <b-form-input
                    id="name"
                    name="name"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                  />
                </b-form-group>

                <b-form-group id="input-group-1" label="Email:" label-for="email">
                  <b-form-input
                    id="email"
                    v-model="form.email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter email"
                  />
                </b-form-group>

                <b-form-group id="input-group-3" label="Message:" label-for="message">
                  <b-form-textarea
                    id="message"
                    name="message"
                    v-model="form.message"
                    required
                    placeholder="Enter message"
                  />
                </b-form-group>

                <b-button type="submit" variant="primary">Submit</b-button>
              </b-form>
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
    title: 'Contact',
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.form,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error));
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1240px;
}
.hero-content {
  padding-top: 15.625rem;
}
h3 {
  color: var(--primary);
}
p {
  font-family: 'Open Sans Condensed', sans-serif;
}
#ContactHeader {
  background-color: #000000;
  .g-image {
    opacity: 0.5;
  }
}
</style>
