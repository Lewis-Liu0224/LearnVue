import * as util from './js/Util'

import Vue from 'vue'

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello webpack'
  }
})

require('./css/normal.css')