"use strict";

export default {
  install: function install(Vue) {
    Vue.mixin({
      beforeCreate: function beforeCreate() {
        var _this = this;

        var filters = this.$options.filters;

        var set = function set(name) {
          if (typeof filters[name] === 'undefined') {
            filters[name] = function () {
              for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
                arg[_key] = arguments[_key];
              }

              return _this.$i18n && _this["$".concat(name)] ? _this["$".concat(name)].apply(_this, arg) : arg[0];
            };
          } else {
            console.warn("[vue-i18n-filter] filter '".concat(name, "' already exists."));
          }
        };

        set('t');
        set('tc');
        set('te');
      },
      beforeDestroy: function beforeDestroy() {
        var filters = this.$options.filters;
        delete filters.t;
        delete filters.te;
        delete filters.tc;
      }
    });
  }
};
