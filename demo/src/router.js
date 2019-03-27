import Vue from 'vue'
import Router from 'vue-router'
import vhead from '@/components/vHeader/vhead.vue'
import vcity from '@/components/vBody/vcity.vue'
import vdetails from '@/components/vdetails/vdetails.vue'
Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    { path: '/', component: vhead, name: 'vhead' },
    { path: '/vcity', component: vcity, name: 'vcity' },
    {path:'/vdetails', component: vdetails, name: 'vdetails' }
  ]
})
