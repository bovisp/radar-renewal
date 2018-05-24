require('./bootstrap');

window.Vue = require('vue');
window.flattenObject = require('flatten-object');

window.events = new Vue()

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
