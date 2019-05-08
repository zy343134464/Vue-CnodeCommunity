import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Topic from '../components/Topic'
import UserInfo from '../components/UserInfo'
import siderBar from '../components/siderBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: Main
      }
    },
    {
      name: 'topic',
      path: '/topic/:id&author=:name',
      components: {
        main: Topic,
        siderBar: siderBar
      }
    },
    {
      name:'userInfo',
      path:'/userinfo/:name',
      components:{
        main:UserInfo
      }
    }
  ]
})