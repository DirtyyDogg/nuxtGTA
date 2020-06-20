import Vue from 'vue'

import AppContainer from '~/components/container/Container'
import AppNavbar from '~/components/Navbar/'
import AppCarousel from '~/components/Carousel/'
import Cardz from '~/components/Cardz/'
import AppIntro from '~/components/Intro/'
import AppInfo from '~/components/Info/'
import AppContact from '~/components/Contact/'
import AppProjecten from '~/components/Projecten/'
import AppFooter from '~/components/Footer/'
// footer h9's
import H9col1 from '~/components/h9/Footer/col1/'
import H9col2 from '~/components/h9/Footer/col2/'
import H9col3 from '~/components/h9/Footer/col3/'

const components = { AppContainer, AppNavbar, AppCarousel, Cardz, AppIntro, AppInfo, AppContact, AppProjecten, AppFooter, H9col1, H9col2, H9col3 }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
