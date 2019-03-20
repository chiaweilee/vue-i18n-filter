# [Vue-I18n-filter](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/vue-i18n-filter/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/vue-i18n-filter.svg?style=flat)](https://www.npmjs.com/package/vue-i18n-filter) [![Coverage Status](https://img.shields.io/coveralls/chiaweilee/vue-i18n-filter/master.svg?style=flat)](https://coveralls.io/github/chiaweilee/vue-i18n-filter?branch=master) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Vue-I18n-filter is a Vue `filter` mix-in for Vue-I18n, which allow you use Vue filter to declare Vue-i18n.

### Installation

```
npm install vue-i18n-filter
```

```JavaScript
import VueI18n from 'vue-i18n'
import VueI18nFilter from 'vue-i18n-filter'

Vue.use(VueI18n)
Vue.use(VueI18nFilter)
```

### Usage

*Vue filters `t`, `te`, `tc` will mixed-in,
equal effect with `$t`, `$te`, `$tc` of `vue-i18n`.*

*avoid to declare Vue filter name as `t`, `te` or `tc` in component when using Vue-i18n-filter.*

#### Basic usage

```vue.js
{{ '你好' | t }} // hello
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
{{ 'message.hello' | t }} // こんにちは、世界
```

```vue.js
{{ 'message.greeting2' | t({ name: 'kazupon' }) }} // やあ kazupon！
```

```vue.js
{{ 'message.hello' | te('en') }} // true
```

```vue.js
{{ 'message.apple' | tc(0) }} // 林檎ってしまった
```

```vue.js
{{ 'message.apple' | tc(10, { count: 10 }) }} // 10の林檎
```

### filters chain example

*translate and capitalize*

```vue.js
{{ 'message.hello' | t | capitalize }}
```
