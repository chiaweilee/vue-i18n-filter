export default {
  install: function (Vue) {
    Vue.mixin({
      beforeCreate () {
        const { filters } = this.$options
        const set = name => {
          if (typeof filters[name] === 'undefined') {
            filters[name] = (...arg) => (this.$i18n && this[`$${name}`]) ? this[`$${name}`].apply(this, arg) : arg[0]
          } else {
            console.warn(`[vue-i18n-filter] filter '${name}' already exists.`)
          }
        }
        set('t')
        set('tc')
        set('te')
      },
      beforeDestroy () {
        const { filters } = this.$options
        delete filters.t
        delete filters.te
        delete filters.tc
      }
    })
  }
}
