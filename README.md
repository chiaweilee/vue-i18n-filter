## vue-i18n-filter

<a href="https://npmcharts.com/compare/vue-i18n-filter?minimal=true"><img src="https://img.shields.io/npm/dm/vue-i18n-filter.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/vue-i18n-filter"><img src="https://img.shields.io/npm/v/vue-i18n-filter.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/vue-i18n-filter"><img src="https://img.shields.io/npm/l/vue-i18n-filter.svg" alt="License"></a>

### Intro

`filter` support extend for `vue-i18n`

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

### Example

```JavaScript
var message = {
    ja: {
        message: {
          hello: 'こんにちは、世界',
          greeting: 'やあ！',
          greeting2: 'やあ {name}！',
          apple: '林檎ってしまった | one 林檎 | {count}の林檎'
        }
      }
}
```

```vue.js
{{ 'message.hello' | t }}
```

*こんにちは、世界*

```vue.js
{{ 'message.greeting2' | t({ name: 'kazupon' }) }}
```

*やあ kazupon！*

```vue.js
{{ 'message.hello' | te('en') }}
```

*true*

```vue.js
{{ 'message.apple' | tc(0) }}
```

*林檎ってしまった*

```vue.js
{{ 'message.apple' | tc(10, { count: 10 }) }}
```

*10の林檎*
