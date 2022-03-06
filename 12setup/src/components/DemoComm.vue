<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-03-05 21:35:44
-->
<template>
    demo component num : {{num}}
    <button @click="add">demo ++</button>
    <br>
    user中的 {{user.username}}<br>
    <input type="text" v-model="user.username">
    <hr/>
    toRefs中 {{username}}<br>
    <input type="text" v-model="username">
    <hr/>
    <div>计算属性的使用</div>
    个人信息：{{person}}
</template>

<script>
import { computed, onBeforeMount, reactive, ref, toRefs, watch } from "vue"

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

        const person = computed(()=>{
            return "姓名："+user.username+"年龄："+user.age+"性别："+user.sex;
        })

        // watch(()=>{
        //     console.log(user.username + "username 被修改")
        // })
        watch([()=>user.username,()=>user.sex],([newValue1,newVaule2],[oldValue1,oldValue2])=>{
            console.log(newValue1+"-------"+oldValue1);
            console.log(newVaule2+"-------"+oldValue2);
        },{immediate:true})

        onBeforeMount(()=>{
            console.log("周期函数");
        })

        return {num,add,user,...toRefs(user),person}
    },
}
</script>