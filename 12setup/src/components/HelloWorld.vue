<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-04 20:21:44
-->
<template>
  {{title}}HelloWorld
  <button @click="demo">子按钮</button>
  <hr>
  <div>从HomeView获取的数据 {{titleparent}}</div>
  <hr>
  <div>当前路径地址{{fullPath}}</div>
</template>

<script>
import { inject } from '@vue/runtime-core'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
export default {
  name: 'HelloWorld',
  emits:["childevent"],
  props: {
    title:{
      type:String,
      default:'######'
    }
  },
  setup(props,context){

    function demo(){
      context.emit("childevent","child to parent data _ "+props.title)
    }

    const titleparent = inject("title")

    //获取路径
    const route = useRoute()
    const fullPath = route.fullPath

    onBeforeRouteLeave(()=>{
      console.log('leave route')
    })

    return {demo,titleparent,fullPath}
  }
}
</script>
