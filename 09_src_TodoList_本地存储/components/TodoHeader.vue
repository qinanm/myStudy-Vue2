<template>
  <div class="header">
      <!-- @change 当值发生改变时触发   @keyup.enter 弹起enter键触发，后面方法不要加括号-->
      <input type="text" placeholder="请输入你的任务名称，按回车确认" @keyup.enter="addli" v-model="con">
  </div>
</template>

<script>
    // 导入nanoid 用于id唯一标识，是uuid的精简版
    import {nanoid} from 'nanoid'
    export default {
        name:'TodoHeader',
        props:['getTodoli'],
        data() {
            return {
                con:''
            }
        },
        methods:{
            addli(e){
                // console.log(e.target.value)
                // 将用户的输入包装成一个对象
                if(e.target.value.trim() !== ''){
                    const todoli = {
                        id:nanoid(),
                        con:e.target.value,
                        done:false
                    }
                    this.getTodoli(todoli)
                    // 数据放入列表后清空文本框
                    this.con = ''
                }
            }
        },
        
    }
</script>

<style scoped>
    .header{
        width: 100%;
    }
    .header input{
        width: 100%;
        height: 40px;
        padding-left: 8px;
        border: 1px solid #cfcfcf;
        border-radius: 5px;
        outline: none;
        font-size: 16px;
    }
</style>