<template>
  <div class="hello">
    <p>
      {{ name }} {{ version }}
    </p>
    <p>
      computed-event-times: {{ computedEventCount }}
    </p>
    <p>
      computed-function-run-times: {{ computedFunctionRunCount }}
    </p>
    <p>
      computed-result: {{ $computed }}
    </p>
    <p>
      rnd: {{ rnd }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      rnd: [],
      computedEventCount: 0,
      computedFunctionRunCount: 0
    }
  },
  computed: {
    $computed () {
      // eslint-disable-next-line
      this.computedEventCount += 1 // test only
      // --- normal code ---
      // return this.rnd[0]
      // --- whi-did-you-computed code ---
      const vm = this // test only
      return this.$whyDidYouComputed(this.rnd[0])(function (rnd) {
        vm.computedFunctionRunCount += 1 // test only
        return rnd
      })
    }
  },
  mounted () {
    setInterval(() => {
      this.rnd.push(Math.random())
    }, 1000)
  },
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
