<template>
  <ul class="nav">
    <li>
      <a href="#/btn">按钮</a>
    </li>
    <li>
      <a href="#/tab">选项卡</a>
    </li>
    <li>
      <a href="#/list">列表</a>
    </li>
    <li>
      <a href="#/chart">Chart</a>
    </li>
    <li>
      <a href="#/vuex">vuex</a>
    </li>
    <li>
      <a href="#/linkage">联动</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.nav > li{
  width: 22%;
  height: 100px;
  float: left;
  margin: 0 0 20px 4%;
}
.nav > li:nth-child(4n + 1){
  margin-left: 0;
}
.nav a{
  display: block;
  background: rgb(25, 195, 255);
  line-height: 100px;
  color: #fff;
}
</style>
