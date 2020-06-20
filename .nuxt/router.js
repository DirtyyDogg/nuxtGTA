import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ef58aa48 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _3cddca16 = () => interopDefault(import('../pages/links.vue' /* webpackChunkName: "pages/links" */))
const _58acbba6 = () => interopDefault(import('../pages/old/index.vue' /* webpackChunkName: "pages/old/index" */))
const _a39afb84 = () => interopDefault(import('../pages/projecten.vue' /* webpackChunkName: "pages/projecten" */))
const _1134bf8e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ef58aa48,
    name: "contact"
  }, {
    path: "/links",
    component: _3cddca16,
    name: "links"
  }, {
    path: "/old",
    component: _58acbba6,
    name: "old"
  }, {
    path: "/projecten",
    component: _a39afb84,
    name: "projecten"
  }, {
    path: "/",
    component: _1134bf8e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
