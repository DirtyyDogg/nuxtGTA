<template>
  <div id="cards">
    <img class="image" src="https://i0.wp.com/keescomfort.nl/wp-content/uploads/2018/12/h1-icon-1-1.png">
    <h4>Renovatie</h4>
    <div class="overlay">
      <div class="text">
        Renovatie
        <br>
        <span
          class="span"
        />
        <p>
          Complete woning renovatie
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
span.span {
    display: block;
    /* color: burlywood; */
    /* width: 32px; */
    border-color: black;
    background: bisque;
    border: 1px solid;
}
#cards {
  position: relative;
  width: 98%;
  padding: 39px 0 39px 0;
}

.image {
  display: block;
//   width: 23%;
  height: 6rem;
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin: auto;
}
@media screen and (min-width: 768px) {
  .image {
    // width: 59% !important;
    height: 8rem;
  }
  h4 {
    font-size: 1.3rem;
  }
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #008CBA;
  background-image: url(https://keescomfort.nl/wp-content/uploads/2018/12/brickred-1.png);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
}

#cards:hover .overlay {
  height: 100%;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
p {
    font-size: 14px;
    margin: auto;
    padding-top: 1rem;
}
</style>
