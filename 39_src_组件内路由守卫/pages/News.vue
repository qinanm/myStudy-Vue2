<template>
    <div>
       <ul>
           <li :style="{opacity}">欢迎学习Vue</li>
           <li>news2 <input type="text"></li>
           <li>news3 <input type="text"></li>
           <li>news4 <input type="text"></li>
       </ul>
   </div>
</template>

<script>
    export default {
        name:'MyNews', 
        data() {
            return {
                opacity:1
            }
        },
       /*  mounted(){
            this.timer = setInterval(()=>{
                console.log('@');
                if(this.opacity <= 0){
                    this.opacity = 1
                }
                this.opacity -= 0.01
            },16)
        },
        beforeDestroy(){
            clearInterval(this.timer)
        } */

        // 两个新的生命周期钩子  仅存在与路由组件中
        activated(){
            this.timer = setInterval(()=>{
                // console.log('@');
                if(this.opacity <= 0){
                    this.opacity = 1
                }
                this.opacity -= 0.01
            },16)
            // console.log('MyNews组件被激活了');
        },
        deactivated(){
            clearInterval(this.timer)
            // console.log('MyNews组件失活了');
        }
    }
</script>

<style>

</style>