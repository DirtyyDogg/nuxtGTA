<template>
  <b-row
    style="text-align: center;"
    cols="1"
    cols-md="2"
  >
    <b-col>
      <h4>Wie zijn wij? Hoe werken wij? En wat kunt u van ons verwachten?</h4>
      <p>
        Wij zijn een allround klussenbedrijf.  Wij kunnen u helpen met vrijwel al uw binnenhuis projecten. Van onderhoud tot complete renovaties. Wij zijn er voor u!

        Graag geven wij u meer uitleg! Klik op de knop hieronder.
      </p>
      <!--  -->
      <Btn />
    </b-col>
    <b-col>
      <img src="https://i0.wp.com/keescomfort.nl/wp-content/uploads/2018/11/kisspng-opel-vivaro-van-car-opel-5ac64bc8d719e0.9208801315229449688811.png" alt="Intro">
    </b-col>
  </b-row>
</template>

<script>
import Btn from '~/components/Buttons/Btn1'
export default {
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>
img {
  height: auto;
  width: 100%;
}
.col {
  margin: auto;
}
</style>
