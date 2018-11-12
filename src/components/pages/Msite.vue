<template>
    <div class="msite">  
        <!--头部样式-->
        <HeaderTop title="武汉市洪山区">
             <router-link class="header_search" slot="left" to="/">
                <i class="iconfont icon-sousuo"></i>
            </router-link>
             <router-link class="header_login" slot="right" to="/">
                <span class="header_login_text" >
                     登录 |  注册
                </span>
                <span class="header_login_text">
                 <i class="iconfont icon-person"></i>
                </span>
             </router-link>
        </HeaderTop>
        <!--多选滑动框-->
        <mt-swipe :auto="0" class="swipe-select-container">
            <mt-swipe-item>
                <div class="swipe-select">
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/1.jpg">
                        </div>
                        <span>甜品饮品</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/2.jpg">
                        </div>
                        <span>10元午餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/3.jpg">
                        </div>
                        <span>药品代购</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/4.jpg">
                        </div>
                        <span>超市</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/5.jpg">
                        </div>
                        <span>新店特惠</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/6.jpg">
                        </div>
                        <span>准时达</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/7.jpg">
                        </div>
                        <span>预订早餐</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/8.jpg">
                        </div>
                        <span>土豪推荐</span>
                        </a>
                    </div>
            </mt-swipe-item>
            <mt-swipe-item>
                 <div class="swipe-select">
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/10.jpg">
                        </div>
                        <span>川菜</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/14.jpg">
                        </div>
                        <span>水果</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/13.jpg">
                        </div>
                        <span>寿司</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/12.jpg">
                        </div>
                        <span>新店开张</span>
                        </a>
                        <a href="javascript:" class="link_to_food">
                        <div class="food_container">
                            <img src="../../static/nav/11.jpg">
                        </div>
                        <span>下午茶</span>
                        </a>    
                    </div>                       
            </mt-swipe-item>
        </mt-swipe> 
        <!--推荐-->
        <div class="msite-act-pro">
            <div>
                <div class="pro-card">
                    <h3>品质套装</h3>
                    <div>搭配齐全吃的好</div>
                    <div style="color:#af8260">立即抢购 ></div>
                    <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" >
                </div>
            </div>
            <div>
                <div class="pro-card">
                    <h3 style="color:red">限量抢购</h3>
                    <div>超值美味</div>
                    <div style="color:red">3523 <span>正在抢 ></span> </div>
                    <img src="https://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" >
                </div>
            </div>
        </div>
        <!--轮播-->  
        <mt-swipe :auto="4000" class="swipe-container">
            <mt-swipe-item>
                <img src="../../static/img/bzf_b1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../static/img/bzf_b2.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <!--商家列表-->
        <div class="shoplist-title">
            推荐商家
        </div>
        <ShopList></ShopList>
    </div>
</template>

<script>
import HeaderTop from '../HeaderTop.vue'
import ShopList from './ShopList.vue'

export default {
    components:{
        HeaderTop,
        ShopList
        
    }
}
</script>
<style>

.msite .swipe-container{
    width: 100%;
    height:43vw;
}
.msite .swipe-container img{
    width: 100%;
   
}
.msite .mt-swipe-item{
    width: 100%;
}
.msite .swipe-select-container{
    width: 100%;
    height: 47.2vw;
    margin-top: 12vw;
}
.swipe-select{
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    height: 100%;
}
.link_to_food{
    display: block;
    width: 25%;
    height: 50%;
    text-align: center;
}
.link_to_food>.food_container>img{
    width: 60%;
    height: 60%;
}
.link_to_food> span{
    font-size: .32rem;
    color: #666;
}
.msite-act-pro{
    width: 100%;
    height: 40vw;  
    display: flex;
}
.msite-act-pro>div{
    padding: 1.5vw 0.75vw ;
    width:50% ;
    height: 100%;
}
.pro-card{
    height: 37vw;
    background-color: #efeaea;  
    position: relative;  
    padding: 1vw;
}
.pro-card>img{
    position: absolute;
    bottom: 3vw;
    right: 3vw;
    height: 20vw;
    width: 24vw;  
}
.pro-card>h3{
    font-size: 5vw;
}
.pro-card>div:nth-child(2){
    font-size: 0.33rem;
}
.pro-card>div:nth-child(3){
    font-size: 0.30rem;
}
.pro-card>h3{
    margin: 2vw 0 0 4vw;
}
.pro-card>div{
    margin: 1vw 0 0 4vw;
}
.shoplist-title {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: .96rem;
    height: 9.6vw;
    font-size: 5vw;
    color: #000;
}
.shoplist-title:after, .shoplist-title:before {
    display: block;
    content: "";
    width: .533333rem;
    width: 5.333333vw;
    height: .026667rem;
    height: .266667vw;
    background-color: #999;
}
.shoplist-title:before {
    margin-right: .346667rem;
    margin-right: 3.466667vw;
}
.shoplist-title::after {
    margin-left: .346667rem;
    margin-left: 3.466667vw;
}
</style>
