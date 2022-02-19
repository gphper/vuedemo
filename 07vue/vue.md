###	安装

* 安装脚手架 `nom install -g @vue/cli`
* 创建项目 `vue create demo`



## 	指令

`v-pre`  原样输出不解析

`v-once` 只获取data中声明是值，不随着后期操作而改变

`v-text` 插入文本

`v-html` 解析并插入html标签

`v-bind` 绑定属性值 ，可以使用  `:属性`的方式简写

```
<template>
 <h2 v-bind:title="msg">hello world</h2>
 <div v-bind:style=[backgroundStyle]>Hello</div>
 <div v-bind:style="{fontSize:'100px'}">Hello</div>
 <div :class={one:isone,two:istwo}>Hello</div>
 <button @click="switchClass">switch</button>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     msg:"hello world",
     backgroundStyle:'background-color:red',
     isone:true,
     istwo:false
    }
  },
  methods:{
    switchClass(){
      this.isone = !this.isone
    }
  }
}

<style>
.one{
  color: aquamarine;
}

.two{
  font-size: 30px;
}
</style>
```

