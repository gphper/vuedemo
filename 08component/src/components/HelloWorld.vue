<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-20 17:15:41
-->
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
    // props:["title"],
    props:{
        title:{
            type:String,
            default:'######'
        },
        article:{
            type:Array,
        }
    },
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
