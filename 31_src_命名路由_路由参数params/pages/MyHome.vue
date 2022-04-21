<template>
    <div>
        <h1>我是Home的内容</h1>
        <!-- 跳转--要写完整路径 -->
        <router-link :to="{name:'message'}" class="a" active-class="active">Message</router-link>
        <router-link to="/home/news" class="a" active-class="active">News</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'MyHome'
    }
</script>

<style>

</style>