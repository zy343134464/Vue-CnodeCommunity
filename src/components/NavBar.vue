<template>
  <div id="navbar">
    <div class="layout clearfix">
      <a class="brand" href="/">
        <img src="../assets/cnodejs_light.svg" alt="logo">
      </a>
      <form class="navbar_search">
          <input class="search_query" type="text">
      </form>
      <ul class="nav clearfix">
          <li><a href="#">首页</a></li>
          <li><a href="#">新手入门</a></li>
          <li><a href="#">API</a></li>
          <li><a href="#">关于</a></li>
          <li><a href="#">注册</a></li>
          <li><a href="#">登录</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
#navbar{
    background: #444;
}
#navbar .brand,
#navbar .navbar_search{
    float: left;
}
#navbar .nav{
    float: right;
}
#navbar .brand img{
    margin-right: 14px;
    margin-top: 6px;
    width: 120px;
}
#navbar .navbar_search .search_query{
    background: url(../assets/search.e53b380a.hashed.png) 4px 4px no-repeat #888;
    padding: 8px 5px 3px 22px;
    color: #666;
    border: 0;
    margin-top: 10px;
    border-radius: 15px;
    transition: all 0.5s;
}
#navbar .navbar_search .search_query:hover{
    background-color: #fff;
}
#navbar .nav li{
    float: left;
}
#navbar .nav li a{
    display: block;
    color:#ccc;
    font-size: 13px;
    margin: 15px 20px;
}
</style>