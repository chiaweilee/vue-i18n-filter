<template>
  <div class="hello">
    <p>
      {{ name }} {{ version }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    name: {
      type: String,
      default: ''
    },
    version: {
      type: String,
      default: ''
    }
  }
}
</script>
