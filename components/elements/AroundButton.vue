<script setup>
const props = defineProps(["type", "muted"]);
</script>

<template>
  <button v-if="type === 'play'" class="btn-around btn-play">
    <IconPlay
      alt="play_btn"
      class="btn-play__icon"
      :fontControlled="false"
      filled
    />
  </button>
  <button v-else-if="type === 'mute'" class="btn-around btn-mute">
    <IconMute alt="mute-btn" :fontControlled="false" filled />
  </button>
  <button
    v-else-if="type === 'stop'"
    class="btn-around btn-mute"
    :class="{
        btn_muted: muted
    }"
  >
    <IconStop alt="mute-btn" :fontControlled="false" filled />
  </button>
</template>

<style lang="sass">
.btn-around
    cursor: pointer
    display: flex
    justify-content: center
    align-items: center
    @include fast-transition
    @include shadow
    @include hover-shadow

.btn-mute
    width: 40px
    height: 40px
    border-radius: 20px
    background-color: rgba(255,255,255,0.12)

.btn_muted
    background-color: rgba(255,255,255,0.52)

.btn-play
    padding: 27px
    border-radius: 50px
    background-color: $orange
</style>
