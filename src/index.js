export default {
  install: function (Vue) {
    Vue.mixin({
      beforeCreate () {
        const { filters } = this.$options
        const assets = name => {
          if (typeof filters[name] !== 'undefined') {
            console.warn(`Can not set filter '${name}', it already exists.`)
          } else {
            filters[name] = (...arg) => this[`$${name}`].apply(this, arg)
          }
        }
        assets('t')
        assets('tc')
        assets('te')
      }
    })
  }
}
