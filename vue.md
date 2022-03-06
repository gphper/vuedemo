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

* 具名插槽

```HelloWorld.vue
<template>
    <div>
        <slot name="hello">hello</slot>
        <slot name="world">world</slot>
        <slot></slot>
    </div>
</template>

<script>
export default({
    name:"HelloWorld",
})
</script>

```

```app.vue
<template>
  <HelloWorld>
    <template v-slot:hello>
      <h4>hellooooooooooo</h4>
    </template>
    <template v-slot:default>
      <h4>hell-default</h4>
    </template>
  </HelloWorld>
</template>
```

* 插槽子级向父级传值

```HelloWorld.vue
<template>
    <div>
        <slot :user="user" name="hello">hello</slot>
    </div>
</template>

<script>
export default({
    name:"HelloWorld",
    data(){
        return{
            user:{
                "username":"gphper",
                "sex":"男"
            }
        }
    }
})
</script>
```

```app.vue
<template>
  <HelloWorld ref="hello" @myshow="myshow" :article="articles" title="Test Hello World">
    <template v-slot:hello="hellodata">
      <h4>{{hellodata.user.username}}</h4>
    </template>
  </HelloWorld>
</template>
```



##	生命周期

```vue
  beforeCreate(){
    console.log("实例创建之前自动调用 beforeCreated()")
  },

  created(){
    this.$nextTick(()=>{
      console.log("延迟调用created()")
    })
    console.log("实例创建时调用created()")
  },

  beforeMount(){
    console.log("编译模板之前调用beforeMount()")
  },

  mounted(){
    console.log("编译模板时调用mounted()")
  },

  beforeUpdate(){
    console.log("更新前调用beforeUpdate()")
  },

  updated(){
    console.log("模板内容更新完成")
  },

  beforeUnmount(){
    console.log("实例销毁之前调用")
  },

  unmounted(){
    console.log("实例销毁完成时调用")
  },

  activated(){
    console.log("缓存数据恢复之前调用")
  },

  deactivated(){
    console.log("通过keep-alive缓存之前调用")
  },
```



## 路由(vue-router)

* 安装组件 `npm i vue-router`

* 实例化

  ```route.js
  import { createRouter, createWebHashHistory } from "vue-router";
  import About from "../components/About.vue";
  import Home from "../components/Home.vue";
  
  const routes = [
      {
          path:"/home",
          name:"Home",
          component:Home
      },
      {
          path:"/about",
          name:"About",
          component:About
      }
  ];
  
  const router = createRouter({
      history:createWebHashHistory(process.env.BASE_URL),
      routes
  })
  
  export default router*
  ```

* 引用router

  ```main.js
  import router from './router'
  
  createApp(App).use(router).mount('#app')
  ```

* 模板中使用

  ```app.vue
  <router-link to="/home">
      主页
  </router-link>
  |
  <router-link to="/about">
      关于我们
  </router-link>
  
  <router-view></router-view>
  ```

### 懒加载

```
const About = ()=>import('../components/About.vue')
const routes = [
    {
        path:"/about",
        name:"About",
        component:About,
    }
];
```

###	替换a标签

```
使用插槽的方式替换
<router-link to="/about" custom v-slot="{ navigate }">
   <button @click="navigate">关于我们</button>
</router-link>

<button @click="$router.push('/')">个人中心</button>

<button @click="$router.go(-1)">返回</button>

```

###	嵌套子路由

* 使用 path:'' 设置默认页面

```javascript
{
        path:"/personal",
        name:"Personal",
        component:Personal,
        children:[
            {
                path:'',
                component:Order
            },
            {
                path:"order",
                component:Order,
            },
            {
                path:"setting",
                component:Setting,
            }
        ]
}
```

###	参数传递

* params 传递  :id 的形式

```
{
      path:"article/:id",
      component:Article,
}
```

```
{{$route.params.id}}
```

* query  ?id=10

```
<router-link :to="{path:'/personal/order',query:{order_id:'ORDERYTIKJD'}}">个人订单</router-link><br>
```

可以使用对象形式传递，接收时使用

```
{{$route.query.order_id}}
```



###	重定向

* url方式

  ```
  {
     path:"/",
     redirect:"/home"
  }
  ```

* 指定name方式

  ```
  {
     path:"/",
     redirect:{name:"Home"}
  }
  ```

* 函数方式

  ```
  {
     path:"/",
     redirect: to=>{
         return {path:"/home",query:{name:to.query.id}}
     }
  }
  ```

###	别名

* 使用alias

```
{
        path:"/about",
        name:"About",
        alias:"/gphper",
        component:About
}
```

###	导航守卫

* 前置

  ```
  router.beforeEach((to,from,next)=>{
      document.title=to.meta.title
      next()
  })
  ```

  

* 后置

  ```
  router.afterEach
  ```

* 路由独享模式



##	Vuex（全局变量）



##	组合式API

###	API

ref创建响应式对象,声明对象reactive

```vue
<template>
    demo component num : {{num}}
    <button @click="add">demo ++</button>
    <br>
    user中的 {{user.username}}<br>
    <input type="text" v-model="user.username">
    <hr/>
    toRefs中 {{username}}<br>
    <input type="text" v-model="username">
</template>

<script>
import { reactive, ref, toRefs } from "vue"

export default {
    name:"DemoComm",
    setup() {
        let num = ref(0)
        let user = reactive({
            username:"gphper",
            sex:"男",
            age:18
        })

        const add = ()=>{
            num.value++
        }
        return {num,add,user,...toRefs(user)}
    },
}
</script>
```

计算属性的使用

```vue
const person = computed(()=>{
     return "姓名："+user.username+"年龄："+user.age+"性别："+user.sex;
})
```

watch 监听器 默认匿名函数里面包含哪个值默认监听哪个值

```
//默认监听
watch(()=>{
     console.log(user.username + "username 被修改")
})
```

```
//指定监听
watch(user,()=>{
    console.log(user);
})
```

```
//监控新旧值变化 reactive对象监控
watch(()=>user.username,(newValue,oldValue)=>{
     console.log(newValue);
     console.log(oldValue)
})
//非对象监控
watch(a,(newValue,oldValue)=>{
     console.log(newValue);
     console.log(oldValue)
})
//多数据监控
watch([()=>user.username,()=>user.sex],([newValue1,newVaule2],[oldValue1,oldValue2])=>{
    console.log(newValue1+"-------"+oldValue1);
    console.log(newVaule2+"-------"+oldValue2);
},{immediate:true})
```



###	生命周期

```
import { onBeforeMount } from "vue"

export default {
    name:"DemoComm",
    setup() {
     
        onBeforeMount(()=>{
            console.log("周期函数");
        })

    },
}
```

Provide和Inject

```
<script>
import { provide } from '@vue/runtime-core';
export default {
  setup() {
    
    const title = ref("HomeView 提供的数据")
    provide("title",title.value)

  },
}
</script>
```

```
<script>
import { inject } from '@vue/runtime-core'
export default {
  name: 'HelloWorld',
  setup(props,context){

    const titleparent = inject("title")

    return {titleparent}
  }
}
</script>
```

###	路由

```vue
<script>
import { onBeforeRouteLeave, useRoute } from 'vue-router'
export default {
  name: 'HelloWorld',
  setup(props,context){
    //获取路径
    const route = useRoute()
    const fullPath = route.fullPath

    onBeforeRouteLeave(()=>{
      console.log('leave route')
    })

    return {fullPath}
  }
}
</script>
```

###	Vuex

```
import {userStore} from 'vuex';
const vuex = useStore()
```

