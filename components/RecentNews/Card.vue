<script setup>
const props = defineProps([
  "link",
  "image",
  "title",
  "tagId",
  "timestampCreateAt",
  "countComments",
  "text",
]);
// Тут должен быть запрос на существующие тэги
const tags = ["Industry News", "Innovation", "Company News"];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// Время в милисекундах
// Форматирование из timestamp в красивую человеческую дату
const dateCreateAt = new Date(props.timestampCreateAt * 1000);
const date = `${
  month[dateCreateAt.getMonth()]
} ${dateCreateAt.getDate()}, ${dateCreateAt.getFullYear()}`;
</script>

<template>
  <NuxtLink class="recentnews-card recentnews-card__link" :to="link">
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
          <li class="recentnews-card__tag">
            {{ tags[tagId - 1] }}
            <i class="recentnews-card__icon"></i>
          </li>
          <li class="recentnews-card__tag">
            {{ date }}
            <i class="recentnews-card__icon"></i>
          </li>
          <li v-if="countComments === 1" class="recentnews-card__tag">
            <IconChatSmall
              class="recentnews-card__icon"
              :fontControlled="false"
              filled
            />
            {{ countComments }} comment
          </li>
          <li v-else-if="countComments > 0" class="recentnews-card__tag">
            <IconChatSmall
              class="recentnews-card__icon"
              :fontControlled="false"
              filled
            />
            {{ countComments }} comments
          </li>
          <li v-else class="recentnews-card__tag">
            <IconChatSmall
              class="recentnews-card__icon"
              :fontControlled="false"
              filled
            />
            No comments
          </li>
        </ul>
      </div>
      <p class="recentnews-card__text">{{ text }}</p>
    </div>
  </NuxtLink>
</template>

<style lang="sass">
.recentnews-card
    background-color: $white
    border-radius: 4px
    grid-column-start:  8
    grid-column-end: 13
    @include fast-transition
    @include shadow
    @include hover-shadow

.recentnews-card:hover .recentnews-card__title
    color: $orange

// Для демонстрации работы object position подгружаю одинаковую картинку в разные пропорции
.recentnews-card__image-wrapper
    height: 156px

.recentnews-card__image
    width: 100%
    height: 100%
    object-fit: cover
    object-position: center

.recentnews-card:nth-child(1)
    max-height: 540px
    grid-column-start:  1
    grid-column-end: 8
    grid-row-start: 1
    grid-row-end: 3

.recentnews-card:nth-child(n+2) .recentnews-card__text
    display: none

.recentnews-card:nth-child(1) .recentnews-card__image-wrapper
    height: 360px

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
    align-items: center
    margin-bottom: 16px
    @include font-styles(14px, 400, 150%, 0, $accent)

.recentnews-card__tag
    display: flex
    align-items: center

.recentnews-card__icon:after
    margin-left: 12px
    margin-right: 12px
    content: url('assets/icons/dividerSmall.svg')

svg[class='recentnews-card__icon']
    margin-right: 9px

.recentnews-card__text
    overflow: hidden
    display: -webkit-box
    -webkit-box-orient: vertical
    -webkit-line-clamp: 2
    @include font-styles(16px, 400, 160%, 0, $header_gray)
</style>
