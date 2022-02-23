###	安装

* 安装脚手架 `nom install -g @vue/cli`
* 创建项目 `vue create demo`



## 	指令

`v-pre`  原样输出不解析

`v-once` 只获取data中声明是值，不随着后期操作而改变

`v-text` 插入文本

`v-html` 解析并插入html标签

v-model 双向绑定在表单中使用的多

```vue
<template>
  <label>
    <input type="radio" value="1" v-model="sex">男
  </label>
  <label>
    <input type="radio" value="2" v-model="sex">女
  </label>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      sex:2
    }
  }
}
</script>
```

.lazy 懒加载

.number 转化为数字

.trim 删除空格

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



##	计算属性

computed,需要通过运算处理得到值得属性只有set和get方法

```vue
<template>
  {{ name }} <br> {{ subtitle }}
  <div>{{title}}</div>

  <button @click="setCheck">验证set方法</button>
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
    setCheck(){
      this.title = "mayuan-boke"
    }
  }
}
</script>
```



##	事件监听

使用v-on 和 @ 配合 methods

```vue
<div v-on:click="">事件1</div>
<div @click="">事件2</div>
```

传参时想要获取event时间时要传输 `$event`

.stop阻止冒泡时间

.prevent 阻止默认事件 a标签和submit常用

.once 事件只触发一次

.self 当事件在本身触发时才触发事件

.capture 当添加事件监听器时，使用捕获事件模式

```vue
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
```



##	条件分支指令

`v-if` `v-else` `v-else-if`

```vue
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
      isshow:false,
      type:0
    }
  }
}
</script>
```

##	循环遍历指令

v-for

```vue
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
```



##	组件

###	通信

* 样式只在当前组件有效在子组件无效使用 `<style scoped>`

```HeloWorld.vue
<template>
    <div>
        <h1>{{msg}}</h1>
    </div>
</template>

<script>

export default({
    name:"HelloWorld",
    data(){
        return{
            msg:"hello world"
        }
    }
})
</script>
```

```App.vue
<template>
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

* 传父级组件给子集组件传参数 props

```app.vue
<template>
  <HelloWorld :article="articles" title="Test Hello World"><h4>hellooooooooooo</h4></HelloWorld>
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
  }
}
</script>

<style>

</style>
```

```
<template>
    <div>
        <h1>{{title}}</h1>
        <span v-for="item in article" :key="item">
            {{item}}<br>
        </span>
    </div>
</template>

<script>
import { stringifyStyle } from "@vue/shared"
export default({
    name:"HelloWorld",
    data(){
        return{
            
        }
    },
    // props:["title"],
    props:{
        title:{
            type:String,
            default:'######'
        },
        article:{
            type:Array,
            required:true,
        }
    }
})
</script>
```

* 子组件传递父组件 $emit()

```
<template>
  <HelloWorld @myshow="myshowapp" title="Test Hello World"></HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    myshowapp(msg){
      console.log("app console:" + msg);
    }
  }
}
</script>
```

```
<template>
    <div>
        <h1 @click="shwotitle('hello')">{{title}}</h1>
    </div>
</template>

<script>
export default({
    name:"HelloWorld",
    data(){
        return{
            
        }
    },
    methods: {
        shwotitle(t){
            this.$emit('myshow',t);
        }
    },
})
</script>

```

* 子组件访问父组件使用 $parent 和 $root
* 父组件访问子组件 $refs

```app.vue
<template>
  <HelloWorld ref="hello" @myshow="myshow" title="Test Hello World"></HelloWorld>

  <button @click="this.$refs.hello.childshow">子组件console</button>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: 'App',
  components: {
    HelloWorld
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
```

```HelloWorld.vue
<template>
    <div>
        <h1 @click="shwotitle('hello')">{{title}}</h1>
        <span v-for="item in article" :key="item">
            {{item}}<br>
        </span>
        <br>
        <button @click="this.$parent.appshow()">父节点输出console</button>

    </div>
</template>

<script>
export default({
    name:"HelloWorld",
    data(){
        return{
            
        }
    },
    props:["title"],
    methods: {
        shwotitle(t){
            this.$emit('myshow',t);
        },
        childshow(){
            console.log("child show console")
        }
    },
})
</script>
```

###	插槽  

使用`<solt></solt>`标签

```HelloWorld.vue
<template>
    <div>
        <h1 @click="shwotitle('hello')">{{title}}</h1>
        <span v-for="item in article" :key="item">
            {{item}}<br>
        </span>
        <br>
        <button @click="this.$parent.appshow()">父节点输出console</button>
        <slot></slot>
    </div>
</template>
```

```app.vue
<template>
  <HelloWorld ref="hello" @myshow="myshow" :article="articles" title="Test Hello World"><h4>hellooooooooooo</h4></HelloWorld>
</template>
```

