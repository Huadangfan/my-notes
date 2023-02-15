<template>
  <v-md-preview :text="str" :include-level="[3,4]" :default-show-toc="true"></v-md-preview>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GmtNote',
  data() {
    return {
      str: '# dddd'
    }
  },
  beforeCreate() {
        this.$nextTick(()=>{
            document.body.setAttribute('style', 'background:white')
        })
  },
  created() {
    axios.get("gmt.md").then(res => {
      console.log(res.data);
      this.str = res.data;
    })
  },
  beforeUnmount(){
        document.body.setAttribute('style', 'background:rgb(36,36,36)')
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
