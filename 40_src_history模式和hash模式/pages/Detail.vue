<template>
    <div>
        <!-- 接收params参数 -->
        <h4>消息编号: {{id}}</h4>
        <h4>消息标题: {{title}}</h4>
        <!-- <h4>a:{{a}}</h4>
        <h4>b:{{b}}</h4> -->
    </div>
</template>

<script>
    export default {
        name:'MyDetail',
        props:['id', 'title'],
        // 可以看到此vc内有$route.query接收参数
        mounted() {
            // console.log(this)
        },
    }
</script>

<style>

</style>