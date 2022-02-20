<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-18 21:47:36
-->
<template>
  <ul v-for="item in list" :key="item">
    <li>{{item}}</li>
  </ul>

  <ul v-for="(item,index) in list" :key="item">
    <li>{{index}} - {{item}}</li>
  </ul>

  <div v-for="(item,keys,index) in objs" :key="item">
    <span>{{index}} - {{keys}}:{{item}}</span>
  </div>

  <ul v-for="(item,index) in books" :key="item">
    <li @mouseenter="enter(index)" @mouseleave="leave(index)" :class="{active:item.active}">{{item.bookname}}:{{item.price}}</li>
  </ul>

</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      list:['php','golang','vue'],
      objs:{
        username:"gphper",
        language:"vue"
      },
      books:[
        {
          bookname:"学习GO",
          price:100,
          active:false
        },
        {
          bookname:"学习vue",
          price:200,
          active:false
        }
      ],
      active:false
    }
  },
  methods:{
    enter(index){
      for(let i = 0;i<this.books.length;i++){
        if(index == i){
          this.books[i].active = true;
        }else{
          this.books[i].active = false;
        }
      }
    },
    leave(index){
        this.books[index].active = false;
    }
  }
}
</script>

<style>
  .active{
    color: aqua;
  }
</style>
