import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
import firebaseConfig from './config/firebase'
import VuetifyConfirm from 'vuetify-confirm'

firebase.initializeApp(firebaseConfig);

Vue.use(VuetifyConfirm, {
    buttonFalseText: 'Нет',
    buttonTrueText: 'Да',
    width: 400,

})

Vue.use(Vuetify);

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: h => h(App),
  created(){
      let vm = this;
      firebase.auth().onAuthStateChanged(function(user) {
              vm.$store.dispatch('STATE_CHANGED',user)
      });
  }
}).$mount('#app')
