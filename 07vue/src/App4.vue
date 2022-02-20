<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-18 21:47:36
-->
<template>
  <label>
    <input type="radio" value="1" v-model="sex">男
  </label>
  <label>
    <input type="radio" value="2" v-model="sex">女
  </label>
  <hr/>
  <select v-model="language">
    <option value="php">php</option>
    <option value="go">go</option>
    <option value="vue">vue</option>
  </select>
  {{language}}
  <hr/>
  <label>
    <input type="checkbox" value="eat" v-model="likes">吃
  </label>
  <label>
    <input type="checkbox" value="sport" v-model="likes">运动
  </label>
  {{likes}}
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      msg:"hello world",
      sex:2,
      language:"php",
      likes:[]
    }
  }
}
</script>

<style>

</style>
