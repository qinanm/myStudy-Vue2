<template>
    <div class="con">
        <MyCategory title="美食">
            <img slot="center" src="https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
            <a slot="footer" href="#">更多美食</a>
        </MyCategory>
        <MyCategory title="游戏">
            <ul slot="center">
                <li v-for="game in games" :key="game">{{game}}</li>
            </ul>
            <a slot="footer" href="#">单机游戏</a>
            <a slot="footer" href="#">网络游戏</a>
        </MyCategory>
        <MyCategory title="电影">
            <video controls src="https://vd2.bdstatic.com/mda-km109ah23gvgw4ba/sc/mda-km109ah23gvgw4ba.mp4?v_from_s=hkapp-haokan-hbe&auth_key=1650108558-0-0-36493e4b82771eb95c2b54f0c40ae2a7&bcevod_channel=searchbox_feed&pd=1&cd=0&pt=3&logid=3558556416&vid=7395144846376198296&abtest=100815_2-101454_5-17451_2-3000185_1&klogid=3558556416"></video>
            <!-- 使用template节省结构， 在template内部插槽名字写法不同 如下 -->
            <template slot:footer>
                <div class="foot">
                    <a href="#">经典</a>
                    <a href="#">热门</a>
                    <a href="#">推荐</a>
                </div>
                <h4>欢迎前来观影</h4>
            </template>
        </MyCategory>
    </div>
</template>

<script>
    // 引入category组件
    import MyCategory from './components/MyCategory.vue'

    export default {
        name:'App',
        components:{MyCategory},
         data() {
            return {
                foods:['火锅', '烧烤', '小龙虾', '牛排'],
                games:['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
                videos:['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》'],
            }
        },
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    .con{
        display: flex;
        justify-content: space-around;
    }
    img,video{
        width: 100%;
    }


</style>