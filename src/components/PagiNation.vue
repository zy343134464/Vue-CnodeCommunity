<template>
  <div class="pagination">
    <button @click="btnActive">首页</button>
    <button @click="btnActive">&lt;&lt;</button>
    <button v-if="jdugePrev" class="pagebtn">...</button>
    <button
      v-for="page in pages"
      :class="[{currentPage:currentPage==page},'pagebtn']"
      @click="btnActive(page)"
    >{{page}}</button>
    <button v-if="jdugeNext" class="pagebtn">...</button>
    <button @click="btnActive">&gt;&gt;</button>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      pages: [1, 2, 3, 4, 5],
      currentPage: 1,
      jdugePrev: false,
      jdugeNext: true
    };
  },
  methods: {
    btnActive(page) {
      if (typeof page != "number" && page.target.innerText == "<<") {
        $("button.currentPage")
          .prev()
          .click()
      } else if (typeof page != "number" && page.target.innerText == ">>") {
        $("button.currentPage")
          .next()
          .click()
      } else if (typeof page != "number" && page.target.innerText == "首页") {
        this.pages = [1, 2, 3, 4, 5];
        this.btnActive(1)
      } else {
        this.currentPage = page;
        if (page > 4) {
          this.jdugePrev = true;
        } else {
          this.jdugePrev = false;
        }
        if (page == this.pages[4]) {
          this.pages.shift();
          this.pages.splice(4, 0, this.pages[3] + 1);
        } else if (page == this.pages[0] && page != 1) {
          this.pages.unshift(this.pages[0] - 1);
          this.pages.splice(5, 1);
        }
        this.$emit('handleList',this.currentPage);
      }
    }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 40px;
  height: 29px;
}
.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}
.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>