<template>
  <div id="topic">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" alt="loading">
    </div>
    <div class="panel" v-else>
      <div class="panel_header">
        <span
          :class="{put_top:(topic.top == true),put_good:(topic.good == true),topiclist_tab:(topic.good != true && topic.top != true)}"
        >{{topic | tabFormatter}}</span>
        <span class="panel_header_title">{{topic.title}}</span>
        <div class="changes">
          <span>•发布于：{{topic.create_at | formatDate}}</span>
          <span>
            • 作者：
            {{topic.author.loginname}}
          </span>
          <span>• {{topic.visit_count}}次浏览</span>
        </div>
      </div>
      <div class="panel_content" v-html="topic.content"></div>
      <div class="panel_replies">
        <div class="panel_replies_header">{{topic.replies.length}} 回复</div>
        <div class="panel_replies_cells">
          <div class="replies clearfix" v-for="(reply,index) in topic.replies">
            <router-link :to="{name:'userInfo',params:{name:reply.author.loginname}}">
              <img :src="reply.author.avatar_url">
            </router-link>
            <router-link :to="{name:'userInfo',params:{name:reply.author.loginname}}">
              <span class="reply_author">{{reply.author.loginname}}</span>
            </router-link>
            <span>{{index+1}}楼</span>
            <div class="ups">
              <span v-if="reply.ups.length>0">赞{{reply.ups.length}}</span>
              <span v-else></span>
            </div>
            <p v-html="reply.content"></p>
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
      topic: {}
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success == true) {
            this.isLoading = false;
            this.topic = res.data.data;
          }
        })
        .catch(err => {
          cosole.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getArticleData();
  },
  watch: {
    $route(to, from) {
      this.getArticleData();
    }
  }
};
</script>

<style>
#topic {
  width: 75%;
}
#topic .loading {
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
#topic {
  background: #e1e1e1;
  padding: 10px 0;
}
#topic .panel {
  background: #fff;
}
#topic .panel_header {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}
#topic .panel_header .panel_header_title {
  vertical-align: middle;
  font-size: 20px;
  font-weight: bolder;
}
#topic .panel_header .put_good,
#topic .panel_header .put_top {
  vertical-align: middle;
  background: #80bd01;
  color: #fff;
  padding: 2px 4px;
  border-radius: 3px;
}
#topic .panel_header .topiclist_tab {
  vertical-align: middle;
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
}
#topic .panel_header .changes {
  font-size: 12px;
  color: #838383;
  margin-top: 14px;
}
#topic .panel_content {
  font-size: 14px;
  word-break: break-word;
  padding: 10px;
}
#topic .panel_content img {
  width: 80%;
}
#topic .panel_replies_header {
  padding: 10px;
  border-top: 15px solid #e1e1e1;
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
#topic .replies {
  padding: 10px;
  border-top: 1px solid #e1e1e1;
}
#topic .replies img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
  vertical-align: top;
  margin-right: 8px;
}
#topic .replies p {
  padding-left: 40px;
  color: #333;
  font-size: 16px;
}
#topic .replies .ups {
  float: right;
  margin-right: 10px;
}
.panel_replies a {
  text-decoration: none;
  color: #aaa;
}
</style>