import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app1',
    name: 'Home',
    component: Home
  },
  {
    path: '/app1/video',
    name: 'Video',
    component: Video
  }
]

export default routes
