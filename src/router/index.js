import { createRouter, createWebHashHistory } from 'vue-router'

import GmtNote from '../components/GmtNote.vue'
import PyNote from '../components/PyNote.vue'
import App from '../App.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/gmtnote', name: 'gmtnote', component: GmtNote },
    { path: '/pynote', name: 'pynote', component: PyNote },
    { path: '/index', name: 'index', component: () => import('../views/SecndPage.vue') },
    { path: '/', component: () => import('../views/LogIn.vue')}
  ]
})

export default router