<template>
  <div class="student">
      <h2 >学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <!-- 通过全局事件总线实现兄弟间的通信  将学生名传给学校 -->
      <button @click="sendData">点我将数据传送给学校</button>
  </div>
</template>

<script>

    export default {
        name:'my-student',
        data() {
            return {
                name:'张三',
                sex:'男',
                number:19
            }
        },
        methods:{
            sendData(){
                // 触发事件
                this.$bus.$emit('getData', this.number)
            }
        }
    }
</script>

<style scoped>
    .student{
        background-color: rgb(44, 151, 110);
        padding: 10px;
    }
</style>