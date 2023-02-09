<template>
  <div>
    <h1>Here is Login.Vue</h1>
    <button @click="jumpPynote">PyNote</button>
    <hr>
    <button @click="jumpGMTnote">GMTNote</button>

  </div>
</template>

<script>
import { useRouter } from 'vue-router';
const router = useRouter();
export default {
  methods: {
    jumpPynote(){
      console.log('submit!');
      // router.push( {path: "/index"} );
      this.$router.push('/pynote');
    },
    jumpGMTnote(){
      this.$router.push('/gmtnote');
    }
  }
}
</script>

<style>

</style>