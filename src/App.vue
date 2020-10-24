<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tagbar/>
  </div>
</template>
<script>
import Tagbar from '@/components/TagBar'
export default {
  name:"App",
  components:{
    Tagbar
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
