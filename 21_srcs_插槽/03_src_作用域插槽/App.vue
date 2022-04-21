<template>
    <div class="con">
        <MyCategory title="游戏">
            <!-- 使用template scope 接收mycategory传过来的数据(对象形式) -->
             <template scope="data">
                 <!-- {{data}} -->
                 <ul>
                    <li v-for="game in data.games" :key="game">{{game}}</li>
                </ul>
             </template>
             <!-- 新api scope写法 - - > slot-scope 用法相同，效果小那个图 -->
             <!-- <template slot-scope="data">
                 <ul>
                    <li v-for="game in data.games" :key="game">{{game}}</li>
                </ul>
             </template> -->
        </MyCategory>
        <MyCategory title="游戏">
            <!-- 使用解构赋值，直接得到games -->
             <template scope="{games}">
                 <ol>
                    <li style="color:red" v-for="game in games" :key="game">{{game}}</li>
                </ol>
             </template>
        </MyCategory>
        <MyCategory title="游戏">
             <template scope="{games,msg}">
                <h4 v-for="game in games" :key="game">{{game}}</h4>
                <h4>{{msg}}</h4>
             </template>
        </MyCategory>
    </div>
</template>

<script>
    // 引入category组件
    import MyCategory from './components/MyCategory.vue'

    export default {
        name:'App',
        components:{MyCategory},
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