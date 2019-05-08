<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="layout">
      <router-view name="siderBar"></router-view>
      <router-view name="main"></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components:{
    NavBar
  }
}
</script>

<style scoped>
*{
    margin:0;
    padding:0;
}
ul{
    list-style: none;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
a{
  text-decoration: none;
}
.layout{
  max-width: 80%;
  margin: 0 auto;
}
#app{
  background: #e1e1e1;
}
</style>
