<template>
  <div>
      <h1>我是About内容</h1>
  </div>
</template>

<script>
    export default {
        name:'MyAbout',
        // 可见MyAbout作为路由组件，即用即创建，即走即销毁
       /*  beforeCreate(){
            console.log('MyAbout组件即将被创建');
        },
         beforeDestroy(){
            console.log('MyAbout组件即将被销毁了');
        }, */
        mounted(){
            console.log('MyAbout组件挂载完毕了', this);
        },
       
    }
</script>

<style>

</style>