<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-25 20:48:31
-->
<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>

  <router-link active-class="active" to="/home">
    主页
  </router-link>

  <router-link to="/about" custom v-slot="{ navigate }">
   <button @click="navigate">关于我们</button>
  </router-link>

  <button @click="$router.push('/personal')" :class="{active:$route.path == '/'}">个人中心</button>

  <button @click="$router.go(-1)">返回</button>

  <button @click="jump">JS跳转</button>

  <hr/>
  <span>当前访问路由：</span><span>{{$route.path}}</span>
  <hr/>

  <router-view class="show1" name="show1"></router-view>
  <router-view class="show2"></router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    jump(){
      this.$router.push("/about");
    }
  }
}
</script>

<style>
  .active{
    color: brown;
  }

  .show1{
    width: 200px;
    color:aqua;
    background-color:antiquewhite;
  }

  .show2{
    width: 200px;
    color: bisque;
    background-color: aqua;
  }
</style>
