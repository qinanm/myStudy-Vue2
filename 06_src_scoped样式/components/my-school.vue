<template>
  <div class="demo">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
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
    }
</script>


<style scoped>
/* scoped ：让样式在局部生效，防止冲突，此类名和my-student类名冲突，使用scoped不影响 */
    .demo{
        background-color: gray;
    }
</style>