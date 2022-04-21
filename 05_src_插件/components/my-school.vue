<template>
  <div>
      <!-- 全局过滤器可用 -->
      <h2>学校名称：{{name | mySlice}}</h2>
      <h2>学校地址：{{address}}</h2>
      <!-- Vue原型方法可用 -->
      <button @click="test()">点我测试一下hello方法</button>
  </div>
</template>

<script>

    export default {
        name:'my-school',
        data() {
            return {
                name:'尚硅谷aaaaa',
                address:'北京'
            }
        },
        methods:{
            test(){
                this.hello()
            }
        }
    }
</script>

<style>
    .school{
        background-color: gray;
    }
</style>