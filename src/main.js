import BootstrapVue from 'bootstrap-vue';
// import * as VueGoogleMaps from 'vue2-google-maps';
import DefaultLayout from './layouts/Default.vue';
import checkIfMobile from './util/checkIfMobile';

export default function(Vue, { head }) {
  // Preload local fonts
  const preloadFonts = [
    'OpenSansCondensed-Bold.woff2',
    'Montserrat-SemiBold.woff2',
    'Montserrat-Black.woff2',
  ];
  preloadFonts.forEach(font => {
    head.link.push({
      rel: 'preload',
      href: `/assets/fonts/${font}`,
      as: 'font',
      type: 'font/woff2',
      crossorigin: true,
    });
  });

  // Vue.use(VueGoogleMaps, {
  //   load: {
  //     key: process.env.GRIDSOME_GOOGLE_MAPS_API_KEY,
  //     libraries: 'places', // This is required if you use the Autocomplete plugin
  //   },
  // });
  Vue.use(BootstrapVue);
  Vue.component('DefaultLayout', DefaultLayout);
  Vue.mixin(checkIfMobile);
}
