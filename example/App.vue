<template>
  <ul id="app">
    <li>'hello' | t</li>
    <li>{{ 'message.hello' | t }}</li>
    <li>'message.greeting' | t</li>
    <li>{{ 'message.greeting' | t }}</li>
    <li>'message.greeting2' | t({ name: 'kazupon' })</li>
    <li>{{ 'message.greeting2' | t({ name: 'kazupon' }) }}</li>
    <li>'message.hello' | te('en')</li>
    <li>{{ 'message.hello' | te('en') }}</li>
  </ul>
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
