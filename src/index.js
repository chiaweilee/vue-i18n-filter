export default {
  install: function (Vue) {
    Vue.mixin({
      beforeCreate () {
        const { filters } = this.$options
        const assets = name => {
          if (typeof filters[name] === 'undefined') {
            filters[name] = (...arg) => this[`$${name}`] ? this[`$${name}`].apply(this, arg) : arg[0]
          }
        }
        assets('t')
        assets('tc')
        assets('te')
      }
    })
  }
}
