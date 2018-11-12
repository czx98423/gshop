<template>
    <div class="foot_guide">
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/msite" :class="{on:'/msite'===$route.path}"> 
				<span class="mui-icon iconfont icon-waimai" ></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/order" :class="{on:'/order'===$route.path}">
				<span class="mui-icon iconfont icon-dingdan"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">订单</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search" :class="{on:'/search'===$route.path}">
				<span class="mui-icon iconfont icon-sousuo"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
			<router-link class="mui-tab-item" to="/profile" :class="{on:'/profile'===$route.path}">
				<span class="mui-icon iconfont icon-person"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div>
</template>
<script>

export default {
    created:function(){
	},
	data(){
		return{
		}
	},
	
}
</script>
<style>
.mui-bar .on{
	color:#007aff!important;
}
.foot_guide>.mui-bar-tab{
	height: 15vw;
}
.foot_guide>.mui-bar-tab>.mui-tab-item{
	height: 15vw;
}
</style>

