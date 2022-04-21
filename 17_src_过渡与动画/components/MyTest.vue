<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- vue 特有标签 transition转换（还能取名--取名后 v改为当前名字） 结合vue特殊类型v-enter-active和v-leave-active自动切换 -->
      <!-- appear 一打开页面就出现动画 布尔值 -->
      <!-- transition解析后脱离文档 -->
      <transition name="hello" appear>
          <h2 v-show="isShow">你好呀</h2>
      </transition>
      
  </div>
</template>

<script>
    export default {
        name:'MyName',
        data() {
            return {
                isShow: true
            }
        },

    }
</script>

<style scoped>
    h2{
        background-color: rgb(70, 180, 70);
    }

    .hello-enter-active{
        animation: atguigu 2s linear;
    }
    .hello-leave-active{
        animation: atguigu 2s reverse;
    }
    /* 动画关键帧 */
    @keyframes atguigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0);
        }
    }
</style>