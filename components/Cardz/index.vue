<template>
  <b-row cols="1" cols-md="5">
    <b-col>
      <Card1 />
    </b-col>
    <b-col>
      <Card2 />
    </b-col>
    <b-col>
      <Card3 />
    </b-col>
    <b-col>
      <Card4 />
    </b-col>
    <b-col>
      <Card5 />
    </b-col>
  </b-row>
</template>

<script>
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'
import Card5 from './components/Card5'
export default {
  components: {
    Card1, Card2, Card3, Card4, Card5
  }
}
</script>

<style>

</style>
