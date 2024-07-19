<script setup>
const people = [
  {
    id: 1,
    image: "ClientsSaying1.png",
    text: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",
    firstname: "Shawn",
    lastname: "Edwards",
    company: "Yandex",
    company_position: "DevOps",
  },
  {
    id: 2,
    image: "ClientsSaying1.png",
    text: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",
    firstname: "Shawn",
    lastname: "Edwards",
    company: "Yandex",
    company_position: "DevOps",
  },
  {
    id: 3,
    image: "ClientsSaying1.png",
    text: "Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat minim  laboris cillum laboris voluptate minim proident exercitation ullamco. ",
    firstname: "Shawn",
    lastname: "Edwards",
    company: "Yandex",
    company_position: "DevOps",
  },
];
</script>

<template>
    <div class="clients-saying-slider">
    <ElementsSliderButton
      class="clients-saying-slider__button clients-saying-slider__prevElement"
      :isLeft="true"
      :isGray="false"
    />
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperNavigation,
      ]"
      :slides-per-view="1"
      :navigation="{
        enabled: true,
        nextEl: '.clients-saying-slider__nextElement',
        prevEl: '.clients-saying-slider__prevElement',
      }"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="card in people" :key="card.id">
        <ClientsSayingSliderCard
            :image="card.image"
            :text="card.text"
            :firstname="card.firstname"
            :lastname="card.lastname"
            :company="card.company"
            :company_position="card.company_position"
        />
      </SwiperSlide>
    </Swiper>
    <ElementsSliderButton
      class="clients-saying-slider__button clients-saying-slider__nextElement"
      :isLeft="false"
      :isGray="false"
    />
  </div>
</template>

<style lang="sass">
.clients-saying-slider
  position: relative
  z-index: 3
.clients-saying-slider__button[class*='prevElement']
  position: absolute
  z-index: 5
  right: 50px
  bottom: 0

.clients-saying-slider__button[class*='nextElement']
  position: absolute
  z-index: 5
  right: 0
  bottom: 0
</style>