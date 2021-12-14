import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import 'primeflex/primeflex.css'
import './assets/themes/luna-pink/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './assets/icons/icons.scss'
import personalSidebar from './components/menuone/KonosubaUi.vue'

const app = createApp(App)
app.use(PrimeVue, { ripple: true })
app.use(ToastService)
app.use(store)
app.use(router)
app.component('ss-side-bar', personalSidebar)
app.mount('#app')
