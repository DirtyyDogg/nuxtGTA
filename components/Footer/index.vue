<template>
  <section>
    <b-container
      fluid
    >
      <b-container>
        <b-row
          align-h="between"
          cols="1"
          cols-md="3"
        >
          <b-col>
            <H9col1 />
            <p>
              Wij zijn een in 2016 opgericht klussen bedrijf met roots die al ruim 20 jaar oud zijn. Mede door onze snelle werkwijze, eerlijke prijs en onze dwang om kwaliteit snelheid en service te biede. Horen wij maar zelden dat een klant niet direct tevreden is.
            </p>
          </b-col>
          <b-col>
            <H9col2 />
            <div class="list">
              <ul>
                <li>
                  <span class="icn">
                    <fa
                      :icon="['fas', 'check']"
                      size="1x"
                    />
                  </span>
                  <span class="text">Inspecties</span>
                </li>
                <li>
                  <span class="icn">
                    <Icn />
                  </span>
                  <span class="text">Rapportages</span>
                </li>
                <li>
                  <span class="icn">
                    <Icn />
                  </span>
                  <span class="text">Advies</span>
                </li>
                <li>
                  <span class="icn">
                    <Icn />
                  </span>
                  <span class="text">Onderhoud</span>
                </li>
                <li>
                  <span class="icn">
                    <Icn />
                  </span>
                  <span class="text">Reparatie</span>
                </li>
                <li>
                  <span class="icn">
                    <Icn />
                  </span>
                  <span class="text">Totaal renovatie</span>
                </li>
              </ul>
            </div>
          </b-col>
         <ProjectContainer />
        </b-row>
      </b-container>
    </b-container>
    <OnderFooter />
  </section>
</template>

<script>
import ProjectContainer from './components/ProjectContainer/'
import OnderFooter from './components/OnderFooter'
import Icn from '~/components/Icns/check'

export default {
  components: {
    Icn, OnderFooter, ProjectContainer
  }
}
</script>

<style lang="scss" scoped>
p, .text {
  color: #8c8b8b;
}

.svg-inline--fa {
  box-shadow: 2px 2px 0px 0px #88888854;
}
#hide {
  visibility: hidden;
  width: 76%;
}
#text-center {
  text-align: center!important;
}
.container-fluid {
  width: 100vw;
  padding: 61px;
  margin: 0 ;
  margin-top: 5rem;
  background: #292929;
}
ul {
  padding: 0;
}
li {
  list-style: none;
}
@media screen and (max-width: 991px) and (min-width: 500px) {
  #hide {
    display: none;
  }
}
</style>
