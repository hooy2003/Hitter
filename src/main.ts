import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA75ZZ9Lya-XazLPv1kvwlGvCBzHQWfqiA',
  authDomain: 'hitter-ef5bc.firebaseapp.com',
  projectId: 'hitter-ef5bc',
  storageBucket: 'hitter-ef5bc.appspot.com',
  messagingSenderId: '763666586049',
  appId: '1:763666586049:web:e444955efbaf277d96b740',
  measurementId: 'G-GHYZHB8JC2'
}

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(appFirebase)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
