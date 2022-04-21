<template>
  <div id="top">
      <div class="con">
        <h3>Search Github Users</h3>
        <input type="text" placeholder="enter the name you search" v-model="nameTipValue">
        <button @click="sendNameTip">Search</button>
        <!-- <button @click="lianjie">点我连接github</button> -->
      </div>
  </div>
</template>

<script>
import axios from 'axios'
    export default {
        name:'GithubSearch',
        data() {
            return {
                nameTipValue:''
            }
        },
        methods:{
            sendNameTip(){
                if(this.nameTipValue.trim() === ''){
                   this.nameTipValue = ''
                   alert('输入不能为空！')
                   return 
                }
                let items = []
                // 发送请求 获取数据
                this.$bus.$emit('getUsers', {isFirst: false,isLoding: true,users:[],errmsg:''}),
                axios.get(`https://api.github.com/search/users?q=${this.nameTipValue}`).then(
                    response => {
                        // console.log('请求成功', response.data.items)
                        items = response.data.items
                        // 触发全局事件总线
                        let userItems = []
                        items.forEach(item => {
                            const itemobj = {
                                asrc: item.html_url,
                                imgsrc: item.avatar_url,
                                name: item.login
                            }
                            userItems.unshift(itemobj)
                        });
                        // this.$bus.$emit('getUsers', userItems)
                        this.$bus.$emit('getUsers', {isLoding: false,users:userItems,errmsg:''})
                    },
                    error => {
                        // console.log('请求失败', error.message)
                        this.$bus.$emit('getUsers', {isLoding: false,users:[],errmsg:error.message})
                    }
                )
                
            },
            // lianjie(){
            //     axios.get('https://api.github.com/search/users?q=xxx').then(
            //         response=>{
            //             console.log('请求成功',response.data)
            //         },
            //         error=>{
            //             console.log('请求失败',error.message)
            //         }
            //     )
            // }
        }
    }
</script>

<style scoped>
    #top{
        width: 100%;
        height: 200px;
        border-radius: 6px;
        background: #EEEEEE;
    }
    .con{
        display: inline-block;
        position: relative;
        left: 70px;
        top: 90px;
        /* background-color: #fff; */
    }
    .con h3{
        margin-bottom: 7px;
        font-size: 22px;
        font-weight: normal;
    }
    .con input{
        outline: none;
        padding: 2px;
        margin-right: 2px;
    }
    .con button{
        padding: 2px 4px;
    }
</style>