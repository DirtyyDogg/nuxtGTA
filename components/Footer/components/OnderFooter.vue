<template>
  <div class="footer">
    <footer id="footer" class="footer">
      <nuxt-link to="/">
        {{ SiteNaam }}.nl
      </nuxt-link>
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
a, a:hover {
  color: black;
}
footer#footer {
    text-align: center;
}
footer#footer {
    padding: 2rem;
}
</style>
