import { createApp } from 'vue'
import './assets/main.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
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
} from '@fortawesome/free-solid-svg-icons'

import { 
  faAppStore, 
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faFacebook,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
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
  faGooglePlay,
  faInstagram,
  faLinkedin,
  faFacebook,
  faXTwitter
)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
