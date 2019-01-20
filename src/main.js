// Vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Firebase
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Service worker for PWA
import './registerServiceWorker'

require('dotenv').config()

Vue.config.productionTip = false

var config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
}

firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
