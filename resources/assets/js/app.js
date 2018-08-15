require('./bootstrap');

import VueI18n from 'vue-i18n'
import English from './lang/en'
import French from './lang/fr'

window.Vue = require('vue');
window.flattenObject = require('flatten-object');

Vue.use(VueI18n)

const messages = {
  en: {
  	...English
  },
  fr: {
  	...French
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

window.events = new Vue()

Vue.component('feedback', require('./components/Feedback.vue'));

const app = new Vue({
    el: '#app',
    i18n
});
