<template>
  
  <div height="1100px"  class="common-layout">
   <!--<h1>{{ msg }}</h1><router-link to="/A">A</router-link>&nbsp;-->
   <el-header height="30px" >Header</el-header>
    <el-container height="1000px">
      <el-side width="300px">Side11111111111111</el-side>
    <el-container text-align="center"> 
      
    <router-link to="/">A</router-link>&nbsp;
    <router-link :to="{path:'/home' }">B</router-link>&nbsp;
    <router-link to="/datashow">C</router-link>&nbsp;
    </el-container>
    
    </el-container>
    <el-footer height="30px">Footer</el-footer>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
//common-layout
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
