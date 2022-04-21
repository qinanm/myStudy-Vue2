<template>
  <div>
      <h1 v-text="msg"></h1>
      <h2>学生姓名：{{name}}</h2>
      <h2>学生性别：{{sex}}</h2>
      <h2>学生年龄：{{myAge}}</h2>
      <button @click="addAge()">点我年龄+1</button>
  </div>
</template>

<script>
    export default {
        name:'my-student',
        data() {
            return {
                msg:'我是一名学生！',
                // props优先级更高，所以会先接收到this.age, 再执行下面这句代码
                myAge:this.age
            }
        },
        methods:{
            addAge(){
                this.myAge++;
            }
        },

        // 接收进来的属性是不能改值的 但是可以重新声明一个键去接收其对应值，如上

        // 简单声明接收
        // props:['name', 'sex', 'age']  

        // 接收的同时对数据进行类型限制
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // }


        // 接收的同时对数据 进行类型限制+默认值的指定+必要性的限制
        props:{
            name:{
                type:String, //name的类型必须是字符串
                required:true, // name值是必要的
            },
            age:{
                type:Number,
                default:99  // 默认值
            },
            sex:{
                type:String,
                require:true
            }
        }
    }
</script>

<style>
    .school{
        background-color: gray;
    }
</style>