<template>
    <div>
        <v-md-preview :text="str" left-toolbar="tip" height="500px"></v-md-preview>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ProcessList',
    data() {
        return {
            filename: "todo.md",
            str: '# dddd'
        }
    },
    beforeCreate() {
        this.$nextTick(()=>{
            document.body.setAttribute('style', 'background:white')
        })
    },
    created() {
        axios.get(this.filename).then(res => {
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
    color: rgb(66, 185, 131);
}
</style>
