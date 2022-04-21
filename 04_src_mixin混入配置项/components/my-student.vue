<template>
  <div>
      <!-- 点击学生姓名时 产生弹窗事件 -->
      <h2 @click="ariseAlert">学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
    import {mixin,mixin2} from '../mixin'

    export default {
        name:'my-student',
        data() {
            return {
                name:'张三',
                sex:'男',
                // 这里x的优先级要高于混合中x的优先级   但是声明周期函数例外--- 都执行
                x:666
            }
        },
        // 这里的mounted和混入的mounted都执行  （不知道有没有执行顺序区分--我的是先输出混入再输出这里）
        mounted(){
            console.log('你好student')
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