<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-20 17:12:52
-->
<template>
  <HelloWorld ref="hello" @myshow="myshow" :article="articles" title="Test Hello World">
    <template v-slot:hello="hellodata">
      <h4>{{hellodata.user.username}}</h4>
    </template>
    <template v-slot:default>
      <h4>hell-default</h4>
    </template>

  </HelloWorld>

  <button @click="this.$refs.hello.childshow">子组件console</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      articles:[
        "php",
        "golang"
      ]
    }
  },
  methods:{
    myshow(msg){
      console.log("app console:" + msg);
    },
    appshow(){
      console.log("app show")
    }
  }
}
</script>

<style>

</style>
