<template>
  <b-row
    cols="1"
    cols-md="3"
    style="text-align: center; margin-top: 5rem;"
  >
    <b-col>
      <Project1 />
    </b-col>
    <b-col>
      <Project2 />
    </b-col>
    <b-col>
      <Project3 />
    </b-col>
  </b-row>
</template>

<script>
import Project1 from '~/components/Projecten/components/Projecten/Project1'
import Project2 from '~/components/Projecten/components/Projecten/Project2'
import Project3 from '~/components/Projecten/components/Projecten/Project3'
export default {
  components: {
    Project1, Project2, Project3
  }
}
</script>

<style lang="scss" scoped>
.container-fluid {
  width: 100%;
  padding: 0 ;
  margin: 0 ;
}

</style>
