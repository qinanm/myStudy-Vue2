// 结构
<template>
    <div class="demo">
        <h2>学校名称{{name}}</h2>
        <h2>学校地址{{address}}</h2>
    </div>
</template>

// 交互
<script>
    export default {
        name:'my-school',
        data() {
            return {
                name:'尚硅谷',
                address:'深圳'
            }
        },
    }
</script>

// 样式
<style>
    .demo{
        background-color: bisque;
    }
</style>