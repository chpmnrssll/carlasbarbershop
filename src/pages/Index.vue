<template>
  <DefaultLayout>
    <BannerSection />
    <AboutSection />
    <ServicesSection />
    <PricingSection />
    <BarbersSection />
  </DefaultLayout>
</template>

<script>
import BannerSection from '../components/BannerSection.vue';
import AboutSection from '../components/AboutSection.vue';
import ServicesSection from '../components/ServicesSection.vue';
import PricingSection from '../components/PricingSection.vue';
import BarbersSection from '../components/BarbersSection.vue';

export default {
  components: {
    BannerSection,
    AboutSection,
    ServicesSection,
    PricingSection,
    BarbersSection,
  },
  metaInfo: {
    title: 'Carlas Barber Shop',
  },
};
</script>

<style lang="scss" scoped></style>
