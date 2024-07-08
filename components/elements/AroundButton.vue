<script setup>
const props = defineProps([
        'type'
    ])
</script>

<template>
    <button v-if="type === 'play'" class="btn-play">
        <IconPlay alt="play_btn" class="btn-play__icon" :fontControlled="false" :filled="true" />
    </button>
    <button v-else-if="type === 'mute'" class="mute-play">
        <IconMute alt="mute-btn" :fontControlled="false" :filled="true" />
    </button>
</template>

<style lang="sass">
.mute-play
    display: flex
    justify-content: center
    align-items: center
    width: 40px
    height: 40px
    border-radius: 20px
    background-color: rgba(255,255,255,0.12)
    
.btn-play
    padding: 27px
    border-radius: 50px
    background-color: $orange
    display: flex
    justify-content: center
    align-items: center
</style>