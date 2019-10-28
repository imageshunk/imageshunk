import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

if (typeof window !==  'undefined') {
  const carousel = () => import('vue-owl-carousel');
  Vue.component('carousel', carousel);
}

Vue.config.productionTip = false

export async function createApp ({
  beforeApp = () => {},
  afterApp = () => {}
} = {}) {
  const router = createRouter()
  await beforeApp({
    router,
  })
  const app = new Vue({
    router,
    render: h => h(App)
  })
  const result = {
    app,
    router,
  }
  await afterApp(result)
  return result
}
