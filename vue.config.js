const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,

    // 开启代理服务器 从VueCLI文档复制而来 

    //方式1： 这种配置代理的方式1. 不能配置多个代理 2.数据文件重名不走5000(不能灵活的控制是否揍代理)
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // },

    // 方式二
    devServer: {
        proxy: {
            // 请求前缀
            '/atguigu': {
                target: 'http://localhost:5000',
                pathRewrite: { '^/atguigu': '' }, // 重写路径 将/atguigu去除
                ws: true, //用于支持websocket  不写默认也是TRUE
                changeOrigin: true // 代理8080向5000发送请求时是否说谎 false不说谎--对5000说自己是8080端口 true说谎--对5000说自己也是5000端口  不写默认也是TRUE (用于控制请求头的host值)
            },
            '/woc': {
                target: 'http://localhost:5001',
                pathRewrite: { '^/woc': '' },
                ws: true,
                changeOrigin: true
            },
        }
    }
})