<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1 class="title"><a href="#/">Study Vue</a></h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/

/*reset*/
*{
  margin: 0;
  padding: 0;
}
body{
  text-align: center;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
button{
  background: none;
  border: none;
}

.title{
  padding: 20px 0;
}
.title > a{
  color: rgb(0, 160, 216);
}
</style>
