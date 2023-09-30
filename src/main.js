import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faStar } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)



createApp(App).mount('#app')
