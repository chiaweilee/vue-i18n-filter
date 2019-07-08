import IVue, { VueConstructor, ComponentOptions } from 'vue';
import { IVueI18n } from 'vue-i18n';

export default {
  install(Vue: VueConstructor) {
    Vue.mixin({
      beforeCreate(): void {
        const { filters } = this.$options as ComponentOptions<IVue>;
        const set = (name: string): void => {
          if (typeof filters[name] === 'undefined') {
            filters[name] = (...arg) =>
              (this.$i18n as IVueI18n) && this[`$${name}`]
                ? this[`$${name}`].apply(this, arg)
                : arg[0];
          }
        };
        set('t');
        set('tc');
        set('te');
      },
      beforeDestroy(): void {
        const { filters } = this.$options as ComponentOptions<IVue>;
        delete filters.t;
        delete filters.te;
        delete filters.tc;
      },
    });
  },
};
