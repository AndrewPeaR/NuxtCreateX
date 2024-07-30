<script setup>
// Представим, что тут запрос на сервак, и я получил нужные данные про определенный дом
const houseImage = [
  {
    id: 1,
    imageUrl: "image1.jpg",
  },
  {
    id: 2,
    imageUrl: "image2.jpg",
  },
  {
    id: 3,
    imageUrl: "image3.jpg",
  },
  {
    id: 4,
    imageUrl: "image4.jpg",
  },
  {
    id: 5,
    imageUrl: "image5.jpg",
  },
  {
    id: 6,
    imageUrl: "image6.jpg",
  },
];
const house = {
  name: "Modern cottage",
  images: houseImage,
};

// renderBullet: function(index, className) {
//   return '<span class="' + className + '">' + (index + 1) + '</span>';
// }
</script>

<template>
  <div class="work-slider">
    <ElementsSliderButton
      class="work-slider__button work-slider__prevElement"
      :isLeft="true"
      :isGray="true"
    />
    <ElementsSliderButton
      class="work-slider__button work-slider__nextElement"
      :isLeft="false"
      :isGray="true"
    />
    <Swiper
      :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
      :slides-per-view="1"
      :navigation="{
        enabled: true,
        nextEl: '.work-slider__nextElement',
        prevEl: '.work-slider__prevElement',
      }"
      :pagination="{
        el: '.work-slider__pagination',
        clickable: true,
        type: 'custom',
        bulletClass: 'work-slider__image',
        bulletActiveClass: 'work-slider__image_active',
        // renderCustom: function(swiper, current, total){
        //   const image = houseImage[current-1].imageUrl
        //   const pictures = ''
        //   for(let i = 0; i<houseImage.length; i++){
        //     pictures += `<img src='_nuxt/assets/image/cottage/${houseImage[i].imageUrl}' class='work-slider__image'/>`
        //   }

        //   return pictures
        //   // return current + ' of ' + total;
        // }
      }"
      
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide v-for="image in house.images" :key="image.id">
        <img
          class="work-slider__slide"
          :src="`_nuxt/assets/image/cottage/${image.imageUrl}`"
          :alt="image.imageUrl"
        />
      </SwiperSlide>
    </Swiper>
    <div class="work-slider__pagination">
      <img
        v-for="image in house.images"
        :key="image.id"
        class="work-slider__image"
        :src="`_nuxt/assets/image/cottage/${image.imageUrl}`"
        :alt="image.imageUrl"
      />
    </div>
  </div>
</template>

<style lang="sass">
.work-slider
    position: relative
    z-index: 1
    height: 500px
.work-slider:after
  content: url('assets/image/work-slider__bg.png')
  position: absolute
  top: -300px
  right: -700px
    

.work-slider > .swiper
    height: 100%

.work-slider__slide
    border-radius: 4px
    width: 100%
    height: 100%
    object-fit: cover

.work-slider__nextElement,
.work-slider__prevElement
    position: absolute
    top: 50%
    right: 32px
    z-index: 5

.work-slider__prevElement
    left: 32px

.work-slider__pagination
    display: flex
    gap: 20px
    margin-top: 20px
.work-slider__image
    opacity: 0.6
    width: 100px
    height: 100px
    object-fit: cover
    border-radius: 4px
    @include fast-transition
.work-slider__image:hover
    cursor: pointer
    opacity: 1
.work-slider__image_active
    opacity: 1
</style>
