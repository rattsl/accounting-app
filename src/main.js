import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBhCc-oUFGNnBEbm58NGq3mJTJvtmKL1dc",
    authDomain: "accounting-app-48e21.firebaseapp.com",
    databaseURL: "https://accounting-app-48e21.firebaseio.com",
    projectId: "accounting-app-48e21",
    storageBucket: "accounting-app-48e21.appspot.com",
    messagingSenderId: "36403271638",
    appId: "1:36403271638:web:0eecbd96f71ea1f78db677",
    measurementId: "G-1BNR9B4K34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


