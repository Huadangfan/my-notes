<template>
  <div>
    <span class="clip" @click="jumpTodo">Here is Login.Vue</span>
    <br>
    <button @click="jumpPynote">PyNote</button>
    <hr>
    <button @click="jumpGMTnote">GMTNote</button>
    <hr>
    <button @click="jumpTodo">Todo</button>
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
    },
    jumpTodo(){
      this.$router.push('/processlist');
    }
  }
}
</script>

<style scoped>
.clip{
  font-family: Helvetica,Arial,sans-serif;
  font-size: 350%;
  font-weight: 700;
  background: -webkit-linear-gradient(120deg, #bd34fe 30%, #ff3670);
  background-clip: text;
  color: transparent;
}
</style>