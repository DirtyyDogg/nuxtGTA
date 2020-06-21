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
footer#footer {
    background: #1a1a1a;
}
footer#footer{
  position: absolute;
  width: 100vw;
}
a, a:hover {
  color: ghostwhite;
}
footer#footer {
    text-align: center;
}
footer#footer {
    padding: 2rem;
}
</style>
