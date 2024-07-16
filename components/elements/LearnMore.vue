<script setup>
const props = defineProps([
    'text', 'link_title', 'link'
])

</script>

<template>
    <div class="learn-more">
        <p class="learn-more__text">{{ text }}</p>
        <NuxtLink :to="link">
        <ElementsButton
          :isOrange="true"
          :isLarge="true"
          :isOutline="false"
          :btn_title="link_title"
        />
      </NuxtLink>
    </div>
</template>

<style lang="sass">
.learn-more
    display: flex
    justify-content: center
    align-items: center

.learn-more__text
    margin-right: 40px
    padding-bottom: 5px
    @include font-styles(28px, 700, 150%, 0, $dark)
</style>