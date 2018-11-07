export default {
  install: function (Vue) {
    Vue.mixin({
      beforeCreate () {
        const { filters } = this.$options
        const assets = name => {
          if (typeof filters[name] === 'undefined') {
            filters[name] = (...arg) => (this.$i18n && this[`$${name}`]) ? this[`$${name}`].apply(this, arg) : arg[0]
          }
        }
        assets('t')
        assets('tc')
        assets('te')
      },
      beforeDestroy () {
      const { filters } = this.$options
      if (filters.t) { delete filters.t }
      if (filters.te) { delete filters.te }
      if (filters.tc) { delete filters.tc }
    }
    })
  }
}
