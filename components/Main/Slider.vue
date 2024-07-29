<script setup>
const imageForSlider = [
  {
    id: 1,
    image: "mainSlider1.png",
  },
  {
    id: 2,
    image: "main2.jpg",
  },
  {
    id: 3,
    image: "main3.jpg",
  },
  {
    id: 4,
    image: "main4.jpg",
  },
];
function functionBullet(index, className) {
    return '<span class="' + className + '">' + (`0${index + 1}`) + '</span>'
}
</script>

<template>
  <div class="main-slider">
    <ElementsSliderButton
      class="main-slider__button main-slider__prevElement"
      :isLeft="true"
      :isGray="true"
    />
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperNavigation,
        SwiperPagination,
      ]"
      :slides-per-view="1"
      :navigation="{
        enabled: true,
        nextEl: '.main-slider__nextElement',
        prevEl: '.main-slider__prevElement',
      }"
      :pagination="{ 
        clickable: true,
        renderBullet: functionBullet
      }"
      :loop="true"
    >
      <SwiperSlide v-for="slide in imageForSlider" :key="slide.id">
        <img class="main-slider__slide" :src="`_nuxt/assets/image/${slide.image}`" :alt="slide.image" />
      </SwiperSlide>
    </Swiper>
    <ElementsSliderButton
      class="main-slider__button main-slider__nextElement"
      :isLeft="false"
      :isGray="true"
    />
  </div>
</template>

<style lang="sass" scope>
.main-slider
    position: absolute
    top: 0
    left: 0
    text-align: center
    z-index: 3
    width: 100%
    height: 988px
.main-slider > .swiper
    height: 100%
.main-slider__slide
    filter: brightness(50%)
    width: 100%
    height: 100%
    object-fit: cover
.main-slider__button
    position: absolute
    z-index: 4
    top: 50%
.main-slider__button[class*='prevElement']
    left: 2%
.main-slider__button[class*='nextElement']
    right: 2%
.main-slider .swiper-pagination
    display: flex
    text-align: left
    left: 18% !important
    bottom: 100px !important
.main-slider .swiper-pagination-bullet
    width: 178px
    height: 2px
    margin-right: 4px
    margin-bottom: 12px
    background-color: $white
    opacity: 0.3
    border-radius: 0
    @include fast-transition
    @include font-styles(28px, 700, 150%, 0, $white)
    display: flex
    flex-direction: column-reverse

.main-slider .swiper-pagination-bullet-active
    opacity: 1
</style>
