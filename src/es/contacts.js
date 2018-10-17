import './contacts.scss'

const browser = typeof window !== 'undefined'

export default {
  name: 'Contacts',
  template: `<div data-v-contacts ref="root">
              <div class="contact-search" ref="top">
                <label>
                  <input v-model="filter" placeholder="">
                  <div @click="filter = ''">X</div>
                </label>
              </div>
              <div
                  v-for="char in character"
                  v-if="filteredContacts && filteredContacts[char]"
                  :key="char"
                >
                <div
                  class="character-title"
                  v-text="char"
                  :ref="char"
                ></div>
                <div
                  class="contacts-list"
                >
                    <div
                        class="contact-panel"
                        v-for="(contact, key) in filteredContacts[char]"
                        :key="key"
                    >
                        <img :src="contact.icon || 'ssss'">
                        <span class="contact-name" v-text="contact.name"/>
                        <span v-if="contact.remark" class="contact-remark" v-text="'(' + contact.remark + ')'"/>
                    </div>
                </div>
              </div>
              <div class="character-list">
                <ol>
                  <li @click="goTop()">↑</li>
                  <li
                    v-for="char in character"
                    v-if="filteredContacts && filteredContacts[char]"
                    :class="{'active': char === current}"
                    :key="char"
                    v-text="char"
                    @click="go(char)"
                    ></li>
                </ol>
              </div>
             </div>`,
  props: {
    contacts: {
      type: Array,
      validator: function (contacts) {
        return contacts.every(function (contact) {
          if (typeof contact === 'object' && contact.hasOwnProperty('name')) {
            return true
          }
          console.warn(`'contacts' props should be like this: [{name: 'Jack'}, {name: 'Tom'}].`)
          return false
        })
      },
      required: true
    }
  },
  computed: {
    filteredContacts: function () {
      const vm = this
      const result = {}
      const filter = this.filter.length > 0 ? this.filter.toLowerCase() : false
      this.contacts.forEach(function (c) {
        if (filter) {
          if (c.name.toLowerCase().indexOf(filter) === -1 && (!c.remark || c.remark.toLowerCase().indexOf(filter) === -1)) {
            return
          }
        }
        const char = c.name.toString().substring(0, 1).toUpperCase()
        if (vm.character.indexOf(char) > -1) {
          if (!result[char]) {
            result[char] = []
          }
          result[char].push(c)
        } else {
          if (!result['#']) {
            result['#'] = []
          }
          result['#'].push(c)
        }
      })
      return result
    }
  },
  data: function () {
    const character = ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    return {
      current: character[0],
      character: character,
      filter: ''
    }
  },
  beforeDestroy: function () {
    if (browser) this.$refs.root.removeEventListener('scroll', this.ev, false)
  },
  mounted: function () {
    if (browser) this.$refs.root.addEventListener('scroll', this.ev, false)
  },
  methods: {
    ev: function () {
      const vm = this
      const root = this.$refs.root.getBoundingClientRect()
      this.character.every(function (char) {
        if (!vm.$refs[char] || !vm.$refs[char][0]) return true
        const rect = vm.$refs[char][0].getBoundingClientRect()
        const inview = rect.top >= root.top && rect.bottom < root.bottom
        if (inview) {
          vm.current = char
        }
        return !inview
      })
    },
    go: function (char) {
      this.current = char
      this.$refs[char][0].scrollIntoView()
    },
    goTop: function () {
      this.$refs.top.scrollIntoView()
    }
  }
}
