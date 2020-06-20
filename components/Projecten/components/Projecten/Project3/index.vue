<template>
  <div
    id="Project"
    class="Container"
  >
    <nuxt-link to="#">
      <img
        class="images"
        src="~/assets/tumbbadkamer.png"
        alt=""
        style="width: 100%"
      >
      <!-- <div class="overlay" style="display: none;">
      <img
        class="play"
        src="~/assets/play-button.png"
        alt=""
      >
    </div> -->
      <div class="bottom-left" style="display:none;">
        Bottom Left
      </div>
      <div class="top-left" style="display:none;">
        Top Left
      </div>
      <div class="top-right" style="display:none;">
        Top Right
      </div>
      <div class="bottom-right" style="display:none;">
        Bottom Right
      </div>
      <div class="centered">
        <img class="play" src="~/assets/play-button.png" alt="">
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.row.row-cols-3 {
    margin-top: 2rem;
}
.play {
    height: 6rem;
}
.Container {
    position: relative;
    color: whitesmoke;
}
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.Container:hover .play {
  height: 8rem;
}
@media screen and (max-width: 767px) and (min-width: 500px) {
  body {
    background: yellowgreen !important;
  }
  .images {
      height: 16rem;
      width: 27rem!important;
      margin-bottom: 1rem;
  }
  .play {
      height: 3rem;
  }
}
</style>
