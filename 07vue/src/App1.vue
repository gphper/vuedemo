<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-18 21:47:36
-->
<template>
  <div @click="div1" id="div1">
    <div @click.stop="div2" id="div2"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      name:"gphper",
      subtitle:"vue"
    }
  },
  computed:{
    title:{
      get(){
        return this.name +'-'+ this.subtitle
      },
      set(values){
        let arr = values.split('-')
        this.name = arr[0];
        this.subtitle = arr[1]
      }
    }
  },
  methods:{
    div1(){
      console.log('div1')
    },
    div2(){
      console.log('div2')
    }
  }
}
</script>

<style>
  #div1{
    width: 200px;
    height: 200px;
    background-color: aqua;
  }
   #div2{
    width: 100px;
    height: 100px;
    background-color:blue;
  }
</style>
