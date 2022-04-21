<template>
  <li>
      <input type="checkbox" :checked='todoli.done' @change="updateChecked(todoli.id)">
      <span>{{todoli.con}}</span>
      <button class="delete" @click="deleteli(todoli.id)">删除</button>
  </li>
</template>

<script>
  export default {
      name:'TodoItem',
      props:['todoli','updateDone', 'deleteTodoli'],
      methods:{
        updateChecked(id){
          this.updateDone(id)
        },
        deleteli(id){
          if(confirm('确定删除吗？')){
            this.deleteTodoli(id)
          }
        }
      }
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