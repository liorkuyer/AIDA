import Vue from 'vue'
import Router from 'vue-router'

// Import Components
import Editor from '../components/editor/Editor.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Editor',
    component: Editor,
    props: {
      default: true,
      type: 'simple'
    }
  }]
})
