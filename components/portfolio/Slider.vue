<script setup>
const cards = [
  {
    id: 1,
    image: "portfolio.png",
    title: "Red Finger Building",
    text: "Business Centers",
    link: "https://google.com",
  },
  {
    id: 2,
    image: "portfolio2.png",
    title: "Cubes Building",
    text: "Business Centers",
    link: "https://google.com",
  },
  {
    id: 3,
    image: "portfolio3.png",
    title: "The Pencil Building",
    text: "Stores & Malls",
    link: "https://google.com",
  },
  {
    id: 4,
    image: "portfolio.png",
    title: "Red Finger Building",
    text: "Business Centers",
    link: "https://google.com",
  },
  {
    id: 5,
    image: "portfolio2.png",
    title: "Cubes Building",
    text: "Business Centers",
    link: "https://google.com",
  },
  {
    id: 6,
    image: "portfolio2.png",
    title: "Cubes Building",
    text: "Business Centers",
    link: "https://google.com",
  },
];
</script>

<template>
  <div class="portfolio-slider">
    <ElementsSliderButton
      class="portfolio-slider__button portfolio-slider__prevElement"
      :isLeft="true"
      :isGray="false"
    />
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperNavigation,
        SwiperPagination,
      ]"
      :slides-per-view="3"
      :navigation="{
        enabled: true,
        nextEl: '.portfolio-slider__nextElement',
        prevEl: '.portfolio-slider__prevElement',
      }"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="card in cards" :key="card.id">
        <PortfolioCard
            :image="card.image"
            :title="card.title"
            :text="card.text"
            :link="card.link"
        />
      </SwiperSlide>
    </Swiper>
    <ElementsSliderButton
      class="portfolio-slider__button portfolio-slider__nextElement"
      :isLeft="false"
      :isGray="false"
    />
  </div>
</template>

<style lang="sass">
.portfolio-slider
    position: relative
    width: 100%
    border-radius: 4px

.portfolio-slider__button[class*='prevElement']
    position: absolute
    right: 70px
    top: -70px

.portfolio-slider__button[class*='nextElement']
    position: absolute
    right: 10px
    top: -70px
</style>
