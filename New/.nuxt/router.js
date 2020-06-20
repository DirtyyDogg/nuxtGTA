import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4215708d = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _7fba98e6 = () => interopDefault(import('../pages/links.vue' /* webpackChunkName: "pages/links" */))
const _add84dd2 = () => interopDefault(import('../pages/old/index.vue' /* webpackChunkName: "pages/old/index" */))
const _02ccc0a2 = () => interopDefault(import('../pages/projecten.vue' /* webpackChunkName: "pages/projecten" */))
const _a1438502 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contact",
    component: _4215708d,
    name: "contact"
  }, {
    path: "/links",
    component: _7fba98e6,
    name: "links"
  }, {
    path: "/old",
    component: _add84dd2,
    name: "old"
  }, {
    path: "/projecten",
    component: _02ccc0a2,
    name: "projecten"
  }, {
    path: "/",
    component: _a1438502,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
