<template>
  <div class="container-fluidd">
    <b-row
      align-h="between"
      cols="1"
      cols-sm="2"
    >
      <b-col
        sm="6"
        style="text-align: center;"
      >
        <h4>
          Verspil geen tijd, Bel vandaag: <span class="span">+31657605252</span>
        </h4>
        <p>
          Vraag direct een offerte aan.
        </p>
      </b-col>
      <b-col
        sm="4"
        md="4"
        lg="3"
        class="ml-md-auto p-3"
      >
        <Btn />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Btn from '~/components/Buttons/Btn2'
export default {
  components: {
    Btn
  }
}
</script>

<style lang="scss" scoped>

.container-fluidd {
    width: 100vw;
    background: #adabab;
    margin-left: -12px;
    padding: 20px 0 20px;
}
.span {
    color: #7c1617;
}
.p-3 {
  margin-right: 36px;
}
</style>
