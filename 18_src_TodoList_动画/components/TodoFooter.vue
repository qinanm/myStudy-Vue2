<template>
  <div class="footer" v-show="total>0">
      <!-- <input type="checkbox" :checked="judge" @change="checkAll"> -->
      <input type="checkbox" v-model="judge">
      <!-- 计算属性不加小括号 -->
      <span>已完成{{doneNum}}</span>/
      <span>全部{{total}}</span>
      <button class="delete" @click="deleteDoneNum">清除已完成任务</button>
  </div>
</template>

<script>
    export default {
        name:'TodoFooter',
        props:['todolist'],
        computed:{
          total(){
            return this.todolist.length
          },
          // reduce 专门用于统计数据
          doneNum(){
            // 后面参数0表示从0开始统计 前面参数为函数（内有两个参数，先前游标和当前对象）
            return this.todolist.reduce((pre, cur)=>{
              return cur.done? ++pre : pre
            },0)
          },
          judge:{
            get(){
              return this.total === this.doneNum && this.total > 0
            },
            set(value){
              // 通过自定义是键传值
              this.$emit('checkAllTodo', value)
              // this.checkAllTodo(value) 
            }
          }
        },
        methods:{
          // checkAll(e){
          //   this.checkAllTodo(e.target.checked) 
          // },
          // 清除已完成任务
          deleteDoneNum(){
            this.$emit('deleteDone');
            // this.deleteDone()
          }
        }
        // methods:{
        //   todoDone(){
        //     const Donetodolist = this.todolist.filter(todoli => {
        //       return todoli.done
        //     })
        //     return Donetodolist.length
        //   }
        // }
    }
</script>

<style scoped>
  .footer{
    margin-left: 8px;
  }
  span{
    margin-left: 5px;
  }
  .delete{
    margin-top: 0;
  }
</style>