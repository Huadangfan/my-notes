<template>
    <v-md-preview :text="str"></v-md-preview>
</template>

<script>
import axios from 'axios'

export default {
    name: 'PyNote',
    data() {
        return {
            filename: "pynote.md",
            str: '# dddd'
        }
    },
    created() {
        axios.get(this.filename).then(res => {
            console.log(res.data);
            this.str = res.data;
        })
    }
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
