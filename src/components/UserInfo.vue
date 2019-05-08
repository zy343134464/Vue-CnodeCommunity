<template>
  <div class="user">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    <div class="user_info" v-else>
      <header>主页 /</header>
      <div class="user_info_top">
        <img :src="userinfo.avatar_url">
        <span>{{userinfo.loginname}}</span>
        <p>{{userinfo.score}} 积分</p>
        <p>注册时间：{{userinfo.create_at | formatDate}}</p>
      </div>
    </div>
    <div class="replies">
      <header>最近参与的话题</header>
      <ul>
        <li v-for="item in userinfo.recent_replies">
          <router-link
            :to="{
          name:'topic',
          params:{
            id:item.id
          }
          }"
          >{{item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="topics">
      <header>最近创建的主题</header>
      <ul>
        <li v-for="item in userinfo.recent_topics">
          <router-link :to="{
          name:'topic',
          params:{
            id:item.id
          }
          }">
            {{item.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      userinfo: {}
    };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.isLoading = false;
          this.userinfo = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getData();
  }
};
</script>

<style scoped>
ul{
    margin:0;
    list-style: none;
    background-color: #fff;
}
li{
    padding:10px;
}
a{
    font-size: 16px;
}
.user {
  margin-top: 10px;
}
header {
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
  color: #80bd01;
  font-size:16px;
}
.user_info_top {
  padding: 10px;
  background-color: #fff;
}
.user_info_top img {
  width: 40px;
  height: 40px;
}
.user_info_top span {
  margin-left: 4px;
  font-size: 16px;
  color: #aaa;
  vertical-align: top;
}
.replies {
    margin: 10px 0;
}
.replies header,
.topics header{
    color: #000;
}
</style>
