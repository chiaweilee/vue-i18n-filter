import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import VueI18nFilter from '../lib'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(VueI18nFilter)

const messages = {
  en: {
    message: {
      hello: 'hello world',
      greeting: 'hi!',
      greeting2: 'hi {name}!',
      apple: 'no apples | one apple | {count} apples'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界',
      greeting: 'やあ！',
      greeting2: 'やあ {name}！',
      apple: '林檎ってしまった | 一つの林檎 | {count}の林檎'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
