<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <hello-world :name="name" :version="version"/>
  </div>
</template>

<script>
import packageJson from '../../package'
export default {
  name: 'Home',
  data () {
    return {
      name: packageJson.name,
      version: packageJson.version
    }
  },
  components: {
    HelloWorld: () => import('../components/HelloWorld.vue')
  }
}
</script>
