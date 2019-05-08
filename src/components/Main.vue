<template>
  <div id="main">
      <div class="loading" v-if="isLoading">
        <img src="../assets/loading.gif" alt="loading">
      </div>
      <div class="panel" v-else>
        <div class="panel_header">
          <ul class="clearfix">
            <li class="current-tab">
              <a href="#">全部</a>
            </li>
            <li>
              <a href="#">精华</a>
            </li>
            <li>
              <a href="#">分享</a>
            </li>
            <li>
              <a href="#">问答</a>
            </li>
            <li>
              <a href="#">招聘</a>
            </li>
            <li>
              <a href="#">客户端测试</a>
            </li>
          </ul>
        </div>
        <div class="panel_inner">
          <div class="topic_list">
            <div class="cell clearfix" v-for="topicList in topicLists">
              <a href="#">
                <img :src="topicList.author.avatar_url" alt="user_avatar">
              </a>
              <span class="reply_count">
                <span class="count_of_replies">{{topicList.reply_count}}</span>
                /
                <span class="count_of_visits">{{topicList.visit_count}}</span>
              </span>
              <span
                :class="{put_top:(topicList.top == true),put_good:(topicList.good == true),topiclist_tab:(topicList.good != true && topicList.top != true)}"
              >{{topicList | tabFormatter}}</span>
              <router-link :to="{name:'topic',params:{id:topicList.id}}">
                <a class="topic_title">{{topicList.title}}</a>
              </router-link>
              <span class="last_active_time">{{topicList.last_reply_at | formatDate}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      topicLists: []
    };
  },
  methods: {
    getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: 1,
            limit: 20
          }
        })
        .then(res => {
          if (res.data.success == true) {
            this.isLoading = false;
            this.topicLists = res.data.data;
          }
        })
        .catch(err => {
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
  color: #000;
}
#main .loading {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
}
#main {
  background: #e1e1e1;
  padding: 10px 0;
}
#main .panel {
  background: #fff;
}
#main .panel_header {
  background: #f6f6f6;
}
#main .panel_header ul {
  padding: 10px 0;
}
#main .panel_header ul li {
  float: left;
  margin: 0 14px;
  padding: 3px 4px;
  border-radius: 3px;
}
#main .panel_header ul li.current-tab {
  background: #80bd01;
}
#main .panel_header ul li a {
  color: #80bd01;
  font-size: 14px;
}
#main .panel_header ul li.current-tab a {
  color: #fff;
}
#main .panel_inner .cell {
  line-height: 50px;
  border-top: 1px solid #f0f0f0;
}
#main .panel_inner .cell:hover {
  background: #f5f5f5;
}
#main .panel_inner .cell img {
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-left: 10px;
}
#main .panel_inner .cell .reply_count {
  text-align: center;
  width: 70px;
  display: inline-block;
}
#main .panel_inner .cell .count_of_replies {
  color: #9e78c0;
}
#main .panel_inner .cell .count_of_visits {
  font-size: 10px;
  color: #b4b4b4;
}
#main .panel_inner .cell .put_good,
#main .panel_inner .cell .put_top {
  background: #80bd01;
  color: #fff;
  padding: 2px 4px;
  border-radius: 3px;
}
#main .panel_inner .cell .topiclist_tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
}
#main .panel_inner .cell a.topic_title {
  cursor: pointer;
  display: inline-block;
  margin-left: 4px;
  vertical-align: middle;
  font-size: 16px;
}
#main .panel_inner .cell a.topic_title:active {
  color: #888;
}
#main .panel_inner .cell .last_active_time {
  float: right;
  margin-right: 10px;
}
</style>