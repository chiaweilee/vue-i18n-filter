import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueI18nFilter from '../../lib';

Vue.use(VueI18n);
Vue.use(VueI18nFilter);

window.VueI18n = VueI18n;
window.Vue = Vue;
