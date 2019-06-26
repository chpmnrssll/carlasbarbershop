import BootstrapVue from 'bootstrap-vue';
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

  Vue.use(BootstrapVue);
  Vue.component('DefaultLayout', DefaultLayout);
  Vue.mixin(checkIfMobile);
}
