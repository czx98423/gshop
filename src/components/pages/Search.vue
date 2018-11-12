<template>
    <div class="search">
       <mt-search :value.sync="value" cancel-text="取消" placeholder="搜索">
</mt-search>

    </div>
</template>
<script>
export default {

}
</script>
<style>
.search{
    
}
.search .mint-searchbar-core {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    outline: 0;
    margin: 0;
    padding: 0;
    background-color: white;
}
</style>