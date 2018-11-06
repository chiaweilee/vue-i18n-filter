export default {
  install: function install(Vue) {
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        var _this = this;

        var filters = this.$options.filters;

        var assets = function assets(name) {
          if (typeof filters[name] !== 'undefined') {
            console.warn('Can not set filter \'' + name + '\', it already exists.');
          } else {
            filters[name] = function () {
              for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
              }

              return _this['$' + name].apply(_this, arg);
            };
          }
        };
        assets('t');
        assets('tc');
        assets('te');
      }
    });
  }
};