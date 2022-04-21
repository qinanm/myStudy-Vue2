<template>
    <div class="con">
        <MyCount/>
    </div>
</template>

<script>
    // 引入category组件
    import MyCount from './components/MyCount.vue'

    export default {
        name:'App',
        components:{MyCount},
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .con{
        display: flex;
        justify-content: space-around;
    }
    img,video{
        width: 100%;
    }


</style>