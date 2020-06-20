<template>
  <div class="footer">
    <footer id="footer" class="footer">
      {{ SiteNaam }}.nl
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      SiteNaam: 'Keescomfort'
    }
  }
}
</script>

<style lang="scss" scoped>
footer#footer {
    text-align: center;
}
footer#footer {
    padding: 2rem;
}
</style>
