<template>
    <div class="con">
        <MyCount/>
        <hr>
        <MyPerson/>
    </div>
</template>

<script>
    import MyCount from './components/MyCount.vue'
    import MyPerson from './components/MyPerson.vue'

    export default {
        name:'App',
        components:{MyCount, MyPerson},
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .con{
       display: flex;
       flex-direction: column;
       align-content: center;
    }
    img,video{
        width: 100%;
    }
    hr{
        margin: 20px 0;
    }

</style>