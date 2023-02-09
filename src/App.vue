<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import GmtNote from './components/GmtNote.vue'
// import PyNote from './components/PyNote.vue'

export default {
  name: 'App',
  components: {
    GmtNote
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
