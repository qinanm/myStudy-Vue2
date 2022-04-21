<template>
  <div>
      <!-- 点击学生姓名时 产生弹窗事件 -->
      <h2 @click="ariseAlert">学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
    // 引入一个混合
    import {mixin,mixin2} from '../mixin'

    export default {
        name:'my-school',
        data() {
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        mounted(){
            console.log('你好school');
        },
        // methods:{
        //     ariseAlert(){
        //         alert(this.name)
        //     }
        // }
        mixins:[mixin,mixin2]
    }
</script>

<style>
    .school{
        background-color: gray;
    }
</style>