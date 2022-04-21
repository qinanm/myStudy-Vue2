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
            // console.log('MyAbout组件挂载完毕了', this);
        },

        // 组件内路由守卫
        // 通过路由规则，进入该组件时被调用
        beforeRouteEnter(to,from,next){
            console.log('App---beforeRouteEnter', to, from);
            if (to.meta.isAuth) {
                if (localStorage.getItem('school') === 'atguigu') {
                    next() // 放行
                } else {
                    alert('学校名不对，无权限查看')
                }
            } else {
                next()
            }
        },
        // 通过路由规则，离开该组件时被调用
        beforeRouteLeave(to,from,next){
            console.log('App---beforeRouteLeave', to, from);
            next() 
        }
       
    }
</script>

<style>

</style>