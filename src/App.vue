<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1>Hello Router</h1>
  <p>
    <router-link to="/test">Go to Test1</router-link>
    <router-link to="/test2">Go to Test2</router-link>
  </p>
  <!-- <HelloWorld/> -->
  <router-view></router-view>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PyNote from './components/PyNote.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
