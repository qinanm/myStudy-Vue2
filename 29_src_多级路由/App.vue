<template>
    <div class="con">
        <Banner/>
        <hr>
        <!-- vue中借助 router-link 标签实现路由的切换-->
        <router-link to="/about" class="a" active-class="active">About</router-link><br>
        <router-link to="/home" class="a" active-class="active">Home</router-link>
        <!-- 指定组件的呈现位置 -->
        <router-view></router-view>
    </div>
</template>

<script>
    import Banner from './components/Banner.vue'
    export default {
        name:'App',
        components:{Banner},
    }
</script>

<style>
    .a{
        display: inline-block;
        height: 40px;
        width: 100px;
        margin: 10px;
        line-height: 40px;
        text-align: center;
        text-decoration: none;
        color: black;
        background-color: rgb(153, 199, 191);
    }
    .active{
        background-color: rgb(231, 146, 189);
    }
</style>