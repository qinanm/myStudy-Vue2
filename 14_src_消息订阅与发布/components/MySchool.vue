<template>
  <div class="school">
      <h2>学校名称：{{name}}</h2>
      <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'MySchool',
        data() {
            return {
                name:'尚硅谷',
                address:'北京'
            }
        },
        // 要接收其他组件的信息，需要先绑定一个自定义事件
        mounted(){
            // 创建自定义事件
            // this.$bus.$on('getData', (value)=>{
            //     console.log('我是school组件，我收到了数据：',value)
            // })

            // 订阅消息
            this.pubId = pubsub.subscribe('hello', (msgName,data)=>{
                console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
                // console.log(this)
            })
        },
        beforeDestroy(){
            //销毁自定义事件
            // this.$bus.$off('getData')

            // 取消订阅
            pubsub.unsubscribe(this.pubId)
        }
    }
</script>


<style scoped>
/* scoped ：让样式在局部生效，防止冲突，此类名和my-student类名冲突，使用scoped不影响 */
    .school{
        background-color: rgb(207, 124, 124);
        padding: 10px;
    }
</style>