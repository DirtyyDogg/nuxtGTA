<template>
  <b-navbar toggleable="md">
    <b-navbar-brand to="/">
      {{ SiteNaam }}
    </b-navbar-brand>
    <!-- Toggle -->
    <b-navbar-toggle target="nav-collapse" />
    <!-- collapse -->
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav style="display: none;">
        <b-nav-item to="#">
          Link
        </b-nav-item>
        <b-nav-item to="#" disabled>
          Disabled
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown text="Lang" right style="display: none;">
          <b-dropdown-item href="#">
            EN
          </b-dropdown-item>
          <b-dropdown-item href="#">
            ES
          </b-dropdown-item>
          <b-dropdown-item href="#">
            RU
          </b-dropdown-item>
          <b-dropdown-item href="#">
            FA
          </b-dropdown-item>
        </b-nav-item-dropdown>
        <b-navbar-nav>
          <b-nav-item to="/">
            Home
          </b-nav-item>
          <b-nav-item to="/projecten">
            Projecten
          </b-nav-item>
          <b-nav-item to="/links">
            Links
          </b-nav-item>
          <b-nav-item to="/contact">
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data () {
    return {
      SiteNaam: 'KeesComfort'
    }
  }
}
</script>

<style>

</style>
