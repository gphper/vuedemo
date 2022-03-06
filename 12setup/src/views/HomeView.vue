<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-04 20:21:44
-->
<template>
  <div>count : {{data.count}}</div>
  <div>double: {{data.double}}</div>
  <button @click="add">增加</button>
  <hr/>
  <HelloWorld @childevent="cli" :title="data.username"></HelloWorld>
  <hr>
  <demo-comm></demo-comm>
</template>

<script>
import DemoComm from '@/components/DemoComm.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { reactive, ref } from '@vue/reactivity';
import { computed, provide } from '@vue/runtime-core';

export default {
  components: { HelloWorld, DemoComm },
  setup() {
    const data = reactive({
      count:0,
      username:"gphper",
      double:computed(()=>{return data.count * 2})
    })

    const title = ref("HomeView 提供的数据")
    provide("title",title.value)

    function add(){
      data.count ++;
    }

    function cli(str){
      console.log('parent console log:'+str);
    }

    return {data,add,cli}
  },
}
</script>
