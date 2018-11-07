<template>
  <div>
    <div>
      <a @click="l('en')">🇬🇧en</a>
      &nbsp;
      <a @click="l('ja')">🇯🇵ja</a>
    </div>
    <ul id="app">
      <li>$t('hello')</li>
      <li>{{ $t('message.hello') }}</li>
      <li>'hello' | t</li>
      <li>{{ 'message.hello' | t }}</li>
      <li>'message.greeting' | t</li>
      <li>{{ 'message.greeting' | t }}</li>
      <li>'message.greeting2' | t({ name: 'kazupon' })</li>
      <li>{{ 'message.greeting2' | t({ name: 'kazupon' }) }}</li>
      <li>'message.hello' | te('en')</li>
      <li>{{ 'message.hello' | te('en') }}</li>
      <li>'message.apple' | tc(0)</li>
      <li>{{ 'message.apple' | tc(0) }}</li>
      <li>'message.apple' | tc(1)</li>
      <li>{{ 'message.apple' | tc(1) }}</li>
      <li>'message.apple' | tc(10, { count: 10 })</li>
      <li>{{ 'message.apple' | tc(10, { count: 10 }) }}</li>
    </ul>
  </div>
</template>

<style scoped>
  li:nth-child(odd) {
    display: inline-block;
    background-color: #eee;
  }

  li:nth-child(even) {
    margin-bottom: 20px;
  }
</style>

<script>
export default {
  methods: {
    l (t) {
      this.$i18n.locale = t
    }
  }
}
</script>
