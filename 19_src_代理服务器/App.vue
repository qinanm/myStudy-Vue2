<template>
  <div>
      <button @click="getStudents">获取学生信息</button>
      <button @click="getCars">获取车辆信息</button>
  </div>
</template>

<script>
    // 解决服务器跨域问题 1.cors 修改请求头信息 后端  2.jsonp script src 前后端一起但只能用get  3.（常用）代理服务器
    import axios from 'axios'
    export default {
        name:'App',
        methods:{
            getStudents(){
                // 将请求发给代理服务器8080，代理服务器再从5000端口拿数据  --- 当请求的数据8080本身就有的话，代理服务器8080就不会再转发给5000了，
                // public文件夹就相当于8080的根路径
                axios.get('http://localhost:8080/atguigu/students').then(
                    response => {
                        console.log('请求成功了', response.data)
                    },
                    error => {
                        console.log('请求失败了', error.message)
                    }
                )
            },
            getCars(){
                // 将请求发给代理服务器8080，代理服务器再从5000端口拿数据  --- 当请求的数据8080本身就有的话，代理服务器8080就不会再转发给5000了，
                // public文件夹就相当于8080的根路径
                axios.get('http://localhost:8080/woc/cars').then(
                    response => {
                        console.log('请求成功了', response.data)
                    },
                    error => {
                        console.log('请求失败了', error.message)
                    }
                )
            },
        }
    }
</script>
