<template>
  <section>
    <b-container
      fluid
    >
      <b-container>
        <b-row
          align-h="between"
          cols="4"
        >
          <b-col
            cols="6"
            col
            md="4"
            sm="6"
            lg="3"
          >
            <H9col1 />
            <p>
              Wij zijn een in 2016 opgericht klussen bedrijf met roots die al ruim 20 jaar oud zijn. Mede door onze snelle werkwijze, eerlijke prijs en onze dwang om kwaliteit snelheid en service te biede. Horen wij maar zelden dat een klant niet direct tevreden is.
            </p>
          </b-col>
          <b-col cols="6" col md="4" sm="6" lg="3">
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
          <b-col
            id="hide"
            style="display:none;"
            cols="6"
            col
            md="4"
            sm="6"
            lg="3"
          >
            col onzichtbaar
          </b-col>
          <b-col id="test" cols="12" col md="4" lg="3">
            <H9col3 />
            <b-container>
              <b-row>
                <b-col id="test">
                  <Project1 />
                </b-col>
                <b-col id="testt">
                  <Project2 />
                </b-col>
              </b-row>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <OnderFooter />
  </section>
</template>

<script>
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import OnderFooter from './components/OnderFooter'
import Icn from '~/components/Icns/check'

export default {
  components: {
    Project1, Project2, Icn, OnderFooter
  }
}
</script>

<style lang="scss" scoped>
p, .text {
  color: #8c8b8b;
}
#test, #testt {
  margin: 0 auto;
  padding: 0;
}
#test {
    // margin: 0 auto;
    // padding: 0px;
    padding-left: 4px;
    padding-right: 4px;
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
