<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我输出上面的DOM元素</button>
        <!-- 在脚手架中闭合标签也可以多次使用 -->
        <School ref="sch" id="sch"/>
    </div>
</template>

<script>
    // 引入school组件
    import School from './components/School.vue'
    
    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:'欢迎学习Vue!'
            }
        },
        methods:{
            showDOM(){
                // this是vc 组件实例对象 
                console.log(this.$refs.title)  // 真实DOM元素
                console.log(this.$refs.btn)   // 真实DOM元素
                console.log(this.$refs.sch)  // School组件的实例对象
                console.log(document.querySelector('#sch'))  // School组件的真实DOM
            }
        } 
    }
</script>

<style>

</style>