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
<template>
    {{ 'message.hello' | t }}
    {{ 'message.greeting2' | t({ name: 'kazupon' }) }}
</template>
```

### t, te, tc

filters `t`, `te`, `tc` equal to '$t', '$te', '$tc' in `vue-i18n`

```
{{ 'message.hello' | t }} // equal to $t('message.hello')
```

### Demo

```
{{ 'hello' | t | cap }} // `Hello`

*cap is another filter*
```
