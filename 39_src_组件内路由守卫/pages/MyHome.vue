<template>
    <div>
        <h1>我是Home的内容</h1>
        <!-- 跳转--要写完整路径 -->
        <router-link :to="{name:'message'}" class="a" active-class="active">Message</router-link>
        <router-link to="/home/news" class="a" active-class="active">News</router-link>
        <!-- 缓存 News主键  MyNews是组件名（一个直接写）  不写就是上面全部组件缓存， 写多个采用数组形式(字符串形式，且要绑定)-->
        <keep-alive :include="['MyNews','MyMessage']">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    export default {
        name:'MyHome'
    }
</script>

<style>

</style>