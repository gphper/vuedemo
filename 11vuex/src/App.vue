<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-03 20:34:30
-->
<template>
  
  <HelloWorld></HelloWorld>

</template>


<script>
import HelloWorld from "@/components/HelloWorld.vue"

export default {
  name:"AppView",
  components:{
    HelloWorld
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
