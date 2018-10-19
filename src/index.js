import { argToString, warn } from './utlis'

const cached = {}

const whyDidYouComputed = function () {
  const arg = arguments
  return function (f) {
    if (typeof f !== 'function') {
      warn(`should call like '(this.test)(function (test) { return test })'.`)
      return
    }
    // mark of cache
    const fs = f.toString()
    const args = argToString(arg)
    // init cache if not exist
    if (!cached[fs]) cached[fs] = {}
    // return cached result if cache exist
    if (cached[fs][args]) return cached[fs][args]
    // computed result
    const result = f.apply(null, arg)
    // cache result
    if (cached[fs]) {
      cached[fs][args] = result
    }
    return result
  }
}

export {
  whyDidYouComputed
}

export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$whyDidYouComputed', {
      value: whyDidYouComputed
    })
  }
}
