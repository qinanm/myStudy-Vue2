<template>
    <div>
       <ul>
           <li>news1 <input type="text"></li>
           <li>news2 <input type="text"></li>
           <li>news3 <input type="text"></li>
           <li>news4 <input type="text"></li>
       </ul>
   </div>
</template>

<script>
    export default {
        name:'MyNews', 
        beforeDestroy(){
            console.log('news即将别销毁')
        }
    }
</script>

<style>

</style>