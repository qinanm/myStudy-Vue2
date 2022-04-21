<template>
    <div id="app">
        <div class="todo-container">
            <TodoHeader :getTodoli="getTodoli"/>
            <TodoList :todolist="todolist" :updateDone="updateDone" :deleteTodoli="deleteTodoli"/>
            <TodoFooter :todolist="todolist" :checkAllTodo="checkAllTodo" :deleteDone="deleteDone"/>
        </div>
    </div>
</template>

<script>
    // 引入子组件
    import TodoHeader from './components/TodoHeader.vue'
    import TodoList from './components/TodoList.vue'
    import TodoFooter from './components/TodoFooter.vue'

    export default {
        name:'App',
        components:{TodoHeader, TodoList, TodoFooter},
        data() {
            return {
                // todolist:[{
                //     id:'001',
                //     con:'1111',
                //     done:true
                // },{
                //     id:'002',
                //     con:'2222',
                //     done:false
                // },{
                //     id:'003',
                //     con:'3333',
                //     done:true
                // },]
                
                // 由于todolist是todoheader组件和todofooter组件都在使用，所有放在App中（状态提升）
                todolist:JSON.parse(localStorage.getItem('todolist')) || []
            }
        },
        methods:{
            // 通过hearder中得到的value 给list添加数据
            getTodoli(value){
                // console.log("我是App组件，我收到了数据"+value);
                this.todolist.unshift(value)
            },

            // 通过item中得到的id 修改对应todoli.done状态
            updateDone(id) {
                this.todolist.forEach(todoli=>{
                    if(todoli.id === id){
                        // 状态发生改变后取反
                        todoli.done = !todoli.done
                        return
                    }
                })
            },

            // 通过item中的id 删除对应的todoli  --- 使用过滤的方法
            deleteTodoli(id){
                this.todolist = this.todolist.filter(todoli=>{
                    return todoli.id !== id
                })
            },

            // 全选or取消全选
            checkAllTodo(done){
                this.todolist.forEach(todoli => todoli.done = done)
            },

            // 删除已完成的
            deleteDone(){
                this.todolist = this.todolist.filter(todoli => !todoli.done)
            }
        },
        // 使用监视属性存储数据
        watch:{
            todolist:{
                deep:true,  // 开启深度监视
                handler(value){
                    localStorage.setItem('todolist', JSON.stringify(value))
                }
            },
            
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
        /* 使用ie盒模型 */
        box-sizing: border-box;
    }
    #app{
        width: 720px;
        border: 1px solid #cfcfcf;
        border-radius: 5px;
        padding: 12px 12px 15px;
        margin: 20px auto;
    }
    .todo-container{
        width: 100%;
    }
    ul{
        list-style: none;
    }
    .delete{
        float: right;
        height: 28px;
        padding: 0 10px;
        border-radius: 5px;
        border: 1px solid #757474;
        margin-top: 6px;
        margin-right: 10px;
        line-height: 28px;
        font-size: 14px;
        color: #fff;
        background-color: #E26048;
    }

</style>