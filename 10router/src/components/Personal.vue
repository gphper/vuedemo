<!--
 * @Description: 
 * @Author: gphper
 * @Date: 2022-02-27 18:06:25
-->
<template>
    <span>个人中心</span><br>
    <router-link to="/personal/order">个人订单</router-link><br>
    <router-link to="/personal/setting">设置中心</router-link>
    <router-view class="content"></router-view>
</template>

<script>
export default {
    name:"PersonalPage"
}
</script>

<style scoped>
    .content{
        float: right;
    }
</style>