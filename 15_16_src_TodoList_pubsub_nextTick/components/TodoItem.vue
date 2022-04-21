<template>
  <li>
      <input type="checkbox" :checked='todoli.done' @change="updateChecked(todoli.id)">
      <span v-show="!todoli.isEdit">{{todoli.con}}</span>
      <input 
        type="text" 
        v-show="todoli.isEdit" 
        :value="todoli.con" 
        @blur='unEditTodo(todoli, $event)'
        ref="in"
      >
      <button class="delete" @click="deleteli(todoli.id)">删除</button>
      <button class="edit delete" @click="editTodo(todoli)" v-show="!todoli.isEdit">编辑</button>
  </li>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
      name:'TodoItem',
      props:['todoli'],
      methods:{
        updateChecked(id){
          this.$bus.$emit('getItemIdChecked', id)
        },
        deleteli(id){
          if(confirm('确定删除吗？')){
            // this.deleteTodoli(id)
            // this.$bus.$emit('getItemIdDelete', id)

            // 发布消息
            pubsub.publish('getItemIdDelete', id)
          }
        },
        // 编辑状态
        editTodo(todoli){
          // 给todoli追加一个 响应式 属性 只需要追加一次即可(只在第一次追加) 所以使用判断
          if(!Object.prototype.hasOwnProperty.call(todoli,'isEdit')){
            this.$set(todoli, 'isEdit', true)
          }else{
            todoli.isEdit = true
          }

          // 获取焦点   ---- $nextTick 在下一次DOM更新结束后执行指定的回调
          this.$nextTick(function(){
            this.$refs.in.focus()  // 这里如果不加nextTick 聚焦会在input渲染到页面前，渲染到页面后失效  还能用定时器的方式
          })
        },
        // 失去焦点时 取消编辑
        unEditTodo(todoli, e){
          todoli.isEdit = false
          // 修改文本内容
          if(e.target.value.trim() == '') return alert('输入不能为空')
          this.$bus.$emit('updateTodoCon', todoli.id, e.target.value)
        },
      },
  }
</script>

<style scoped>
  li{
    height: 40px;
    padding-left: 8px;
    border-bottom: 1px solid #cfcfcf;
    line-height: 40px;
  }
  li .delete{
    display: none;
  }
  li:last-of-type{
    border: 0;
  }
  li:hover{
    background-color: #bbbbbb;
  }
  li:hover .delete{
    display: block;
  }
  span{
    margin-left: 4px;
  }
</style>