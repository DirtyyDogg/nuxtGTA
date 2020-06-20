<template>
  <div
    id="wrapper"
    class="container"
  >
    <h1>
      hooi
    </h1>

    <div
      id="colIntro"
      class="col"
    >
      col intro
    </div>

    <div
      id="box"
      class="col"
    >
      box
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
div {
#wrapper {
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: #333;
  }
.container {
  max-width: 100%;
 }

 #box {
   background: whitesmoke;
   margin: auto;
   max-width: 95%;
 }
 }
}
#colIntro {
    background: yellowgreen !important;
  }

</style>
