<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
      <button @click="sendSchoolName">把学校名给APP</button>
  </div>
</template>

<script>

    export default {
        name:'MySchool',
        data() {
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        props:['getSchoolName'],
        methods:{
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        }
    }
</script>


<style scoped>
/* scoped ：让样式在局部生效，防止冲突，此类名和my-student类名冲突，使用scoped不影响 */
    .school{
        background-color: rgb(104, 55, 55);
        padding: 10px;
    }
</style>