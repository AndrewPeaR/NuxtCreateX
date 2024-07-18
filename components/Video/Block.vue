<script setup>
// TODO
// Доработать функционал управляющих видео кнопок
// - Чтобы при запуке плей скрывался
// - Mute мутировал и размутировал видео
// - Инпут регулировал громкость
// - При воспроизведении появлялась кнопка для паузы

const videoFile = "videobanner";
let videoplayerFrame = ref("videoplayerFrame").value;
let volumeControl = ref("volumeControl").value;
let videoplayerPlay = ref("videoplayerPlay").value;

function playVideo() {
  console.log(videoplayerFrame);
  if (videoplayerFrame.paused) {
    videoplayerFrame.volume = volumeControl.value;
    videoplayerFrame.play();
    videoplayerPlay.style.display = "none";
  } else {
    videoplayerFrame.pause();
  }
}
function muteVideo() {}
</script>

<template>
  <section>
    <h2 class="section-title">We are Createx Construction Bureau</h2>
    <p class="section-description">
      We are rightfully considered to be the best construction company in the
      USA.
    </p>
    <div class="videoplayer" ref="videoplayer">
      <video
        width="100%"
        height="100%"
        poster="assets/image/videobanner.png"
        class="videoplayer__frame"
        ref="videoplayerFrame"
      >
        <source :src="`_nuxt/assets/video/${videoFile}.mp4`" type="video/mp4" />
        <source
          :src="`_nuxt/assets/video/${videoFile}.webm`"
          type="video/webm"
        />
        <p>К сожалению, ваш браузер не поддерживает видео</p>
      </video>
      <ElementsAroundButton
        @click="playVideo()"
        :type="'play'"
        class="videoplayer__play"
      />
      <ElementsAroundButton
        @click="muteVideo()"
        class="videoplayer__mute"
        ref="videoplayerPlay"
        :type="'mute'"
      />
      <input
        type="range"
        step="0.1"
        min="0"
        max="1"
        value="0"
        ref="volumeControl"
      />
    </div>
  </section>
</template>

<style lang="sass">
.videoplayer
    width: 100%
    height: 500px
    position: relative
    border-radius: 4px
.videoplayer__frame
    object-fit: cover
.videoplayer__play
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
.videoplayer__mute
    position: absolute
    bottom: 32px
    left: 32px
</style>
