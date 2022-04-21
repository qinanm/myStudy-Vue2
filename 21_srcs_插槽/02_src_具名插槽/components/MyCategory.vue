<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 具名插槽 -->
        <slot name="center">我是一些默认值，当使用者没有传递具体结构时，我会出现1</slot>
        <slot name="footer">我是一些默认值，当使用者没有传递具体结构时，我会出现2</slot>
    </div>
</template>

<script>
    export default {
        name:'MyCategory',
        props:['title']
    }
</script>

<style scoped>
    .category{
        width: 200px;
        height: 300px;
        background-color: rgb(140, 156, 243);
    }
    h3{
        background-color: rgb(246, 196, 131);
        margin: 20px 0;
    }
    ul{
        margin-left: 50px;
    }
    
    

</style>