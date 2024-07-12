<script setup>
const props = defineProps([
        'type'
    ])
</script>

<template>
    <button v-if="type === 'play'" class="btn-around btn-play">
        <IconPlay alt="play_btn" class="btn-play__icon" :fontControlled="false" :filled="true" />
    </button>
    <button v-else-if="type === 'mute'" class="btn-around btn-mute">
        <IconMute alt="mute-btn" :fontControlled="false" :filled="true" />
    </button>
</template>

<style lang="sass">
.btn-around
    display: flex
    justify-content: center
    align-items: center
    @include fast-transition
    box-shadow: 0 10px 30px 10px rgba(34, 60, 80, 0.01)

.btn-around:hover
    box-shadow: 0 10px 20px 10px rgba(34, 60, 80, 0.10)
    
.btn-mute
    width: 40px
    height: 40px
    border-radius: 20px
    background-color: rgba(255,255,255,0.12)
    
.btn-play
    padding: 27px
    border-radius: 50px
    background-color: $orange
</style>