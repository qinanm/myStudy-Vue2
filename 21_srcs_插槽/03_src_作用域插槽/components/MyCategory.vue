<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 作用域插槽  --- 子数据传父新方法 -->
        <slot :games="games" :msg="msg"></slot>
       
    </div>
</template>

<script>
    export default {
        name:'MyCategory',
        props:['title'],
        data() {
            return {
                games:['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
                msg:'你好呀'
            }
        },
    }
</script>

<style>
    .category{
        display: flex;
        flex-direction: column;
        /* align-content: center; */
        width: 200px;
        height: 300px;
        background-color: rgb(140, 156, 243);
    }
    h3{
        background-color: rgb(246, 196, 131);
        margin: 20px 0;
    }
    ul, ol{
        margin-left: 50px;
    }
    h4{
        margin: 10px;
    }
</style>