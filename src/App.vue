<template>
  <div id="app"> 
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide.vue'

export default {
  components:{
    FooterGuide
  }
}
</script>

<style>

</style>
