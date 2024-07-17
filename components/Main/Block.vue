<script setup>
</script>

<template>
    <main class="main">
        <MainSlider />
        <div class="wrapper main__info">
            <h1 class="main__title">Create<span>X</span><br />construction</h1>
            <p class="main__description">Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
            <div class="main__buttons">
                <NuxtLink :to="'https://google.com'">
                    <ElementsButton 
                        class="main__button"
                        :btn_title="'Learn more about us'"
                        :isOutline="true"
                        :isOrange="false"
                        :isLarge="true"
                    />
                </NuxtLink>
                <NuxtLink :to="'https://yandex.ru'">
                    <ElementsButton 
                        class="main__button"
                        :btn_title="'SUBMIT REQUEST'"
                        :isOutline="false"
                        :isOrange="true"
                        :isLarge="true"
                    />
                </NuxtLink>
            </div>
        </div>
    </main>
</template>

<style lang="sass">
.main
    position: relative

.main__info
    max-width: 600px
    padding-top: 220px
    position: relative
    z-index: 5
.main__title
    max-width: 577px
    @include font-styles(72px, 700, 130%, 1px, $white)
    text-transform: uppercase
    margin-bottom: 24px
.main__title span
    color: $orange
.main__description
    @include font-styles(20px, 400, 150%, 0, $white)
    max-width: 595px
    margin-bottom: 60px
.main__button
    margin-right: 24px
</style>