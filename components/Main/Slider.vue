<script setup>
const imageForSlider = [
  {
    id: 1,
    image: "mainSlider1.png",
  },
  {
    id: 2,
    image: "mainSlider1.png",
  },
  {
    id: 3,
    image: "mainSlider1.png",
  },
  {
    id: 4,
    image: "mainSlider1.png",
  },
];
</script>

<template>
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperNavigation,
        SwiperPagination,
      ]"
      :slides-per-view="1"
      :navigation="{
        enabled: true,
        nextEl: '.nextElement',
        prevEl: '.prevElement',
      }"
      :pagination="{ clickable: true }"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
    >
      <SwiperSlide v-for="slide in imageForSlider" :key="slide.id">
        <img :src="`_nuxt/assets/image/${slide.image}`" :alt="slide.image" />
      </SwiperSlide>
    </Swiper>
</template>

<style lang="sass">

</style>
