<template>
  <div id="navbar">
    <div class="container clearfix">
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
#navbar{
    background: #444;
}
#navbar .container{
    max-width: 1240px;
    margin: 0 auto;
}
#navbar .container .brand,
#navbar .container .navbar_search{
    float: left;
}
#navbar .container .nav{
    float: right;
}
#navbar .container .brand img{
    margin-right: 14px;
    margin-top: 6px;
    width: 120px;
}
#navbar .container .navbar_search .search_query{
    background: url(../assets/search.e53b380a.hashed.png) 4px 4px no-repeat #888;
    padding: 8px 5px 3px 22px;
    color: #666;
    border: 0;
    margin-top: 10px;
    border-radius: 15px;
    transition: all 0.5s;
}
#navbar .container .navbar_search .search_query:hover{
    background-color: #fff;
}
#navbar .container .nav li{
    float: left;
}
#navbar .container .nav li a{
    display: block;
    text-decoration: none;
    color:#ccc;
    font-size: 13px;
    margin: 15px 20px;
}
</style>