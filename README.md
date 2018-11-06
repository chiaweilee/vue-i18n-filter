## vue-i18n-filter

### Install

```
npm install vue-i18n-filter
```

### Usage

```JavaScript
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueI18nFilter from 'vue-i18n-filter'

Vue.use(VueI18n)
Vue.use(VueI18nFilter)
```

```vue.js
{{ 'message.hello' | t }}
{{ 'message.greeting2' | t({ name: 'kazupon' }) }}
```

### t, te, tc

`vue-i18n-filter` add filter in Vue components.
Filters `t`, `te`, `tc` equal to `$t`, `$te`, `$tc` in `vue-i18n`

```vue.js
{{ 'message.hello' | t }} // equal to $t('message.hello')
```

### Why use filter

```vue.js
{{ $t('message.hello') | cap }}
```

*v.s*

```vue.js
{{ 'message.hello' | t | cap }}
```
