// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Editer from './plugins/editer'

require('bootstrap')
require('bootstrap/dist/css/bootstrap.min.css')

Vue.use(Editer, {
  dialogsFade: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
