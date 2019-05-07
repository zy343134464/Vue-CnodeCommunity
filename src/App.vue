<template>
  <div id="app">
    <NavBar></NavBar>
    <Main></Main>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Main from './components/Main'
export default {
  name: 'App',
  components:{
    NavBar,
    Main
  }
}
</script>

<style>
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
</style>
