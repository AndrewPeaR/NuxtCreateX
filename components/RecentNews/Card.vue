<script setup>
// Тут должен быть запрос на существующие тэги
const tags = ["Industry News", "Innovation", "Company News"]

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const props = defineProps([
  "link",
  "image",
  "title",
  "tagId",
  "timestampCreateAt",
  "countComments",
  "text",
]);
// Время в милисекундах
// Форматирование из timestamp в красивую человеческую дату
const dateCreateAt = new Date(props.timestampCreateAt * 1000)
const date = `${month[dateCreateAt.getMonth()]} ${dateCreateAt.getDate()}, ${dateCreateAt.getFullYear()}`
</script>

<template>
  <div class="recentnews-card">
    <NuxtLink class="recentnews-card__link" :to="link">
      <div class="recentnews-card__image-wrapper">
        <img
          class="recentnews-card__image"
          :src="`_nuxt/assets/image/${image}`"
          :alt="image"
        />
      </div>
      <div class="recentnews-card__description">
        <h3 class="recentnews-card__title">{{ title }}</h3>
        <div class="recentnews-card__info">
          <ul class="recentnews-card__tags">
            <li class="recentnews-card__tag">{{ tags[tagId-1] }}</li>
            <li class="recentnews-card__tag">{{ date }}</li>
            <li v-if="countComments === 1" class="recentnews-card__tag">
                {{ countComments }} comment
            </li>
            <li v-else-if="countComments > 0" class="recentnews-card__tag">
              {{ countComments }} comments
            </li>
            <li v-else class="recentnews-card__tag">No comments</li>
          </ul>
        </div>
        <p class="recentnews-card__text">{{ text }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="sass">
.recentnews-card
    background-color: $white
    border-radius: 4px
    box-shadow: 0 80px 80px -20px rgba(154, 156, 165, 0.08), 0 30px 24px -10px rgba(154, 156, 165, 0.05), 0 12px 10px -6px rgba(154, 156, 165, 0.04), 0 4px 4px -4px rgba(30, 33, 44, 0.03)
    grid-column-start:  8
    grid-column-end: 13
    @include fast-transition

.recentnews-card:hover
    box-shadow: 0px 80px 80px -20px rgba(154, 156, 165, 0.16), 0px 30px 24px -10px rgba(154, 156, 165, 0.10), 0px 12px 10px -6px rgba(154, 156, 165, 0.08), 0px 4px 4px -4px rgba(30, 33, 44, 0.05)

.recentnews-card:hover .recentnews-card__title
    color: $orange

.recentnews-card__image-wrapper
    max-height: 156px
    overflow: hidden

.recentnews-card__image
    // Надо ли как то ровнять картину, чтобы выводился центр картинки?
    // Если да, то как лучше всего это сделать?
    // object-position: 0 -75px

.recentnews-card:nth-child(1)
    max-height: 540px
    grid-column-start:  1
    grid-column-end: 8
    grid-row-start: 1
    grid-row-end: 3

.recentnews-card:nth-child(n+2) .recentnews-card__text
    display: none

.recentnews-card:nth-child(1) .recentnews-card__image-wrapper
    max-height: 360px

.recentnews-card:nth-child(1) .recentnews-card__description
    padding-top: 24px
    padding-bottom: 24px

.recentnews-card__description
    padding: 16px 24px 0 24px

.recentnews-card__title
    margin-bottom: 12px
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
    @include fast-transition
    @include font-styles(20px, 700, 150%, 0, $dark)

.recentnews-card__tags
    display: flex
    margin-bottom: 16px
    @include font-styles(14px, 400, 150%, 0, $accent)

.recentnews-card__tag
    margin-right: 12px

.recentnews-card__tag:after
    margin-left: 12px
    content: url('assets/icons/dividerSmall.svg')

.recentnews-card__tag:last-child:after
    content: ''
.recentnews-card__tag:last-child:before
    margin-right: 8px
    content: url('assets/icons/ChatSmall.svg')

.recentnews-card__text
    overflow: hidden
    // CanIUse пишет о 97% поддержке браузеров этого свойста (line-clamp)
    // Оставшиеся 3% это эксплорер и опера мини, он вообще не понимает это :(
    display: -webkit-box
    -webkit-box-orient: vertical
    -webkit-line-clamp: 2
    @include font-styles(16px, 400, 160%, 0, $header_gray)
</style>
