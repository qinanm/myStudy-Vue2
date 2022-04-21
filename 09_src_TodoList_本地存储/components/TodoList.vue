<template>
    <ul class="todo-list">
        <!-- v-bind绑定之后 双引号内部传入的就是con的值 -->
        <TodoItem v-for="(todoli) in todolist" :key="todoli.id" :todoli="todoli" :updateDone="updateDone" :deleteTodoli="deleteTodoli"/>
    </ul>
</template>

<script>
    import TodoItem from './TodoItem.vue'
    export default {
        name:'TodoList',
        components:{TodoItem},
        props:['todolist', 'updateDone', 'deleteTodoli']
    }
</script>

<style scoped>
    .todo-list{
        border: 1px solid #cfcfcf;
        border-radius: 3px;
        margin: 20px 0;
    }
</style>