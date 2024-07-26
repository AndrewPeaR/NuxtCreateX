<script setup>
// TODO
// Доработать функционал управляющих видео кнопок
// - Чтобы при запуке плей скрывался
// - Mute мутировал и размутировал видео
// - Инпут регулировал громкость
// - При воспроизведении появлялась кнопка для паузы

const videoFile = "videobanner";
const videoplayerFrame = ref("videoplayerFrame");
const volumeLevel = 0.25;
const videoplayerPlay = ref("videoplayerPlay").value;
const isShow = ref(true);
const isMute = ref(false);

function playVideo() {
  console.log(videoplayerFrame.value);
  if (videoplayerFrame.value.paused) {
    videoplayerFrame.value.volume = volumeLevel;
    videoplayerFrame.value.play();
    isShow.value = false;
  }
}
function muteVideo() {
  if (videoplayerFrame.value.volume === volumeLevel) {
    isMute.value = true
    videoplayerFrame.value.volume = 0;
  } else {
    isMute.value = false
    videoplayerFrame.value.volume = volumeLevel;
  }
}
function stopVideo() {
  if (!videoplayerFrame.value.paused) {
    videoplayerFrame.value.pause();
    isShow.value = true;
  }
}
</script>

<template>
  <section class="video">
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
        :class="{ show: !isShow }"
      />
      <ElementsAroundButton
        @click="muteVideo()"
        class="videoplayer__mute"
        ref="videoplayerPlay"
        :class="{ btn_muted: isMute }"
        :type="'mute'"
      />
      <ElementsAroundButton
        @click="stopVideo()"
        class="videoplayer__stop"
        ref="videoplayerPlay"
        :class="{ show: isShow }"
        :type="'stop'"
      />
    </div>
  </section>
</template>

<style lang="sass">
.video
    margin: 460px 0 120px 0
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
.videoplayer__stop
    position: absolute
    top: 15px
    right: 15px
</style>
