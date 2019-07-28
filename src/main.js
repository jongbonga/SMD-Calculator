import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.min.css';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

Vue.use(BootstrapVue, VueAnalytics, {
	id: 'UA-144741179-1'
});

new Vue({
	render: (h) => h(App)
}).$mount('#app');
