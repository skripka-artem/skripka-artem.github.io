import Vue from 'vue'
import _ from 'lodash'
import App from './component/App/App.vue'
import {router} from './router/router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)


new Vue({
  router,
 el: '#app',
  render: h => h(App)
})


