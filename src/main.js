import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faPeriscope } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faFacebook, faTwitter, faYoutube, faPinterest, faPeriscope)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
