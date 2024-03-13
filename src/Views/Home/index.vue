<template>
  <h3>系统首页</h3>
  <div class="wrapper-table">
    <el-table :data="data" style="width: 100%">
      <el-table-column prop="Id" label="Date" width="180" />
      <el-table-column prop="UserName" label="Name" width="180" />
      <el-table-column prop="UserPwd" label="Address" />
    </el-table>
  </div>
</template>

<script>
//import { ref } from 'vue'
import api from '@/api/index'
import axios from 'axios'
import { error } from 'console';
export default {

  data () {
    return {
      data: []
    };
  },
  mounted () {
    const { $axios } = getCurrentInstance().appContext.config.globalProperties
    $axios.getUserInfo().then(res => {
      console.log('进来了', res.data)
    })
    //获取用户信息
    api.getUserInfo().then(response => {
      //console.log(response)
      this.data = response.data;
    }).catch(error => {
      console.error(error);
    })
  }
}
</script>

<style></style>