<template>
    <div>
        <!-- 接收params参数 -->
        <h4>消息编号: {{$route.params.id}}</h4>
        <h4>消息标题: {{$route.params.title}}</h4>
    </div>
</template>

<script>
    export default {
        name:'MyDetail',
        // 可以看到此vc内有$route.query接收参数
        /* mounted() {
            console.log(this)
        }, */
    }
</script>

<style>

</style>