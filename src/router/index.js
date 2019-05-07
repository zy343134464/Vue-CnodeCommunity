import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Topic from '../components/Topic'

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
      path: '/topic/:id',
      components: {
        main: Topic
      }
    }
  ]
})