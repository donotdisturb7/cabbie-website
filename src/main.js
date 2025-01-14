import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTaxi, faUser, faClock, faCreditCard, faStar, faLocationDot, faBriefcase, faMobile, faGift, faShield, faHeadset, faRoute, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import './assets/main.css'

//  FontAwesome icons
library.add(
  faTaxi, 
  faUser, 
  faClock, 
  faCreditCard, 
  faStar, 
  faLocationDot, 
  faBriefcase, 
  faMobile, 
  faGift, 
  faShield, 
  faHeadset, 
  faRoute,
  faChevronDown,
  faAppStore, 
  faGooglePlay
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
