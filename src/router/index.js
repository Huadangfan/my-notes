import { createRouter, createWebHashHistory } from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import PyNote from '../components/PyNote.vue'
import App from '../App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/test', component: HelloWorld },
    { path: '/test2', component: PyNote },
  ]
})

export default router