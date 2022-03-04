<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-03 20:34:30
-->
<template>
  HelloWorld

  <div>直接操作state {{ $store.state.count }}</div>
  <button @click="$store.state.count ++">+</button>
  <button @click="$store.state.count --">-</button>
  <hr/>
  <div>使用mutations操作state {{ $store.state.dcount }}</div>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  <hr/>
  <div>vuex中的getter {{$store.getters.sum}} </div>
  <div>vuex中的getter相差一个key值 {{$store.getters.sum1(20)}} </div>
  <hr/>
  <button @click="act">action</button>
  <hr/>
  <div>获取user中的state {{$store.state.user.username}}</div>
  <div>获取user中的getter {{$store.getters.getname}}</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    add(){
      this.$store.commit("add",10)
    },
    sub(){
      this.$store.commit("sub",10)
    },
    act(){
      this.$store.dispatch("demo",{count:10,name:"gphper"})
    }
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
