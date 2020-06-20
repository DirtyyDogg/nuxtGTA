import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faSpinner, faUser, faExpandAlt, faCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret, faSpinner, faUser, faExpandAlt, faCheck)

Vue.component('fa-icon', FontAwesomeIcon)
