import Vue from 'vue'
import VueRouter from 'vue-router'
import BlogPost from '../views/BlogPost.vue'
import OtherPosts from '../views/OtherPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BlogPost',
    component: BlogPost,
    props: true
  },
  {
    path: '/feed',
    name: 'Feed',
    component: OtherPosts,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log({ to, from })
  next()
})

router.afterEach((to, _from) => {
  console.log(to.name)
})

export default router
