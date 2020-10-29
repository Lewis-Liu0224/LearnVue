import * as util from './js/Util'

require('./css/normal.css')

import Vue from 'vue'
import app from '../vue/app.vue'
// import app from  '../vue/app'

new Vue({
  el: '#app',
  template: `
    <app/>`,
  components: {
    app
  }
})