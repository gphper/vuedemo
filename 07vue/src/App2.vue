<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-18 21:47:36
-->
<template>
  <button @click="isshow = !isshow">切换</button>
  <div v-if="isshow">
    111111111
  </div>
  <div v-else>
    22222222
  </div>

  <hr/>

  <button @click="type=1">切换1</button>
  <button @click="type=2">切换2</button>
  <button @click="type=3">切换3</button>

  <div v-if="type==1">
    111111111
  </div>
  <div v-else-if="type==2">
    22222222
  </div>
  <div v-else-if="type==3">
    3333333
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      msg:"hello world",
      isshow:false,
      type:0
    }
  }
}
</script>
