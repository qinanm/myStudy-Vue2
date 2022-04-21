<template>
    <div id="bottom">
        <h1 v-show="infos.isFirst">welcome to mySearch</h1>
        <h1 v-show="infos.isLoding">Loading...</h1>
        <h1 v-show="infos.errmsg">Error  {{infos.errmsg}}</h1>
        <ul v-show="infos.users">
            <li v-for="user in infos.users" :key="user.name">
                <div>
                    <a :href="user.asrc">
                        <img :src="user.imgsrc">
                    </a>
                    <p>{{user.name}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'GithubList',
        data() {
            return {
                infos:{
                    isFirst: true,
                    isLoding: false,
                    users:[],
                    errmsg:''
                }            
            }
        },
        mounted(){
            // 绑定全局事件总线
            // 得到users 和 当前显示信息
            this.$bus.$on('getUsers', (infos)=>{
                // 比较this.infos,infos 同名属性 后面值覆盖前面值，保留前面不同名属性
                this.infos = {...this.infos, ...infos}
            })
        },
        beforeDestroy(){
            // 解绑
            this.$bus.$off('getUsers')
        }
    }
</script>

<style scoped>
    #bottom{
        padding-top: 10px;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
    }
    li{
        display: flex;
        justify-content: center; 
        width: 33%;
        padding-top: 10px;
        padding-bottom: 30px;
        border: 1px solid #eeeeee;
        margin-top: 30px;
    }
    img{
        width: 125px;  
    }
    p{
        text-align: center;
    }
</style>