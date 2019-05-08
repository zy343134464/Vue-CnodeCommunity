<template>
  <div id="siderBar">
    <div class="user">
      <header>作者</header>
      <div class="userSum">
        <router-link :to="{name:'userInfo',params:{name:userinfo.loginname}}">
          <img :src="userinfo.avatar_url" alt>
        </router-link>
        <router-link :to="{name:'userInfo',params:{name:userinfo.loginname}}">
          <span>{{userinfo.loginname}}</span>
        </router-link>
        <p>积分 {{userinfo.score}}</p>
      </div>
    </div>
    <div class="recent_topics">
      <header>作者最近主题</header>
      <ul>
        <li v-for="recent_topics in topcilimitby5">
          <router-link
            :to="{
        name:'topic',
        params:{
          id:recent_topics.id,
          name:recent_topics.author.loginname
        }
        }"
          >{{recent_topics.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <header>作者最近回复</header>
      <ul>
        <li v-for="recent_replies in replylimitby5">
          <router-link
            :to="{
        name:'topic',
        params:{
          id:recent_replies.id,
          name:recent_replies.author.loginname
        }
        }"
          >{{recent_replies.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: {}
    };
  },
  methods: {
    getData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.userinfo = res.data.data;
          console.log(this.userinfo);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  computed: {
    topcilimitby5() {
      if (this.userinfo.recent_topics) {
        return this.userinfo.recent_topics.slice(0, 5);
      }
    },
    replylimitby5() {
      if (this.userinfo.recent_replies) {
        return this.userinfo.recent_replies.slice(0, 5);
      }
    }
  },
  beforeMount() {
    this.getData();
  },
  watch: {
    $route(to, from) {
      this.getData();
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  padding: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
a {
  text-decoration: none;
  color: #aaa;
}
#siderBar {
  float: right;
  padding: 10px;
  width: 23%;
}
#siderBar .user {
  background: #fff;
}
header {
  font-size: 16px;
  font-weight: bolder;
  color: #51585c;
  border-radius: 3px 3px 0 0;
  padding: 10px;
  background-color: #f6f6f6;
}
.user img {
  vertical-align: middle;
  margin-right: 10px;
  width: 48px;
  height: 48px;
}
.userSum {
  font-size: 16px;
  padding: 10px;
}
.recent_topics {
  margin-top: 10px;
}
.recent_topics ul {
  background-color: #fff;
}
.recent_replies {
  margin-top: 10px;
}
.recent_replies ul {
  background-color: #fff;
}
</style>