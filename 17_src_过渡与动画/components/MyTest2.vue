<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- vue 特有标签 transition转换（还能取名--取名后 v改为当前名字） 结合vue特殊类型v-enter-active和v-leave-active自动切换 -->
      <!-- appear 一打开页面就出现动画 布尔值 -->
      <!-- transition解析后脱离文档  -->
      <!-- transition内只能有一个动画效果  要多个同样效果，使用transition-group -->
      <!-- <transition name="hello" appear>
          <h2 v-show="isShow">你好呀</h2>
      </transition> -->

        <!-- 多个相同动画效果呈现 -->
        <transition-group name="hello" appear>
          <!-- 每个动画需要有唯一的key值 -->
            <h2 v-show="!isShow" key="1">你好呀</h2>
            <h2 v-show="isShow" key="2">尚硅谷</h2>
        </transition-group>
      
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
        /* transition: 2s linear; */
    }
    /* 进入的起点 */ /* 离开的终点 */
    .hello-enter, .hello-leave-to{
        transform: translateX(-100%);
    }
    .hello-enter-active,.hello-leave-active{
        transition: 2s linear;
    }
    /* 进入的终点 */ /* 离开的起点 */
    .hello-enter-to, .hello-leave{
        transform: translateX(0);
    }
</style>