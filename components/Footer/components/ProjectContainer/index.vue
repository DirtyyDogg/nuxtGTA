<template>
  <b-col
    cols="8"
  >
    <H9col3 />
    <b-container
      fluid
    >
      <b-row>
        <b-col cols="6">
          <Project1 />
        </b-col>
        <b-col cols="6">
          <Project2 />
        </b-col>
      </b-row>
    </b-container>
  </b-col>
</template>

<script>
import Project1 from '../Project1'
import Project2 from '../Project2'
export default {
  components: {
    Project1, Project2
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
