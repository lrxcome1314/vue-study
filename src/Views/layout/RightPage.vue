<template>
  <div class="header">
    <div class="icon">
      <el-icon v-if="isClose" @click="change"><Expand /></el-icon>
      <el-icon v-else @click="change"><Fold /></el-icon>
    </div>
    <div class="rightcss">
      <div class="time">{{ time }}</div>
      <div>
        <span><a href=""></a></span>
      </div>
    </div>
  </div>
  <div class="wrapper">
    <router-view></router-view>
  </div>
  
</template>

<script>
import {ref,onMounted} from 'vue'
import dayjs from 'dayjs'
// @ts-ignore
//import { tagEmits } from 'element-plus'
export default {
  props:["isClose"],
  emits:['change'],
  // @ts-ignore
  setup(props,{emit}){
    let time=ref(null);
    const change=()=>{
      emit('change')
    }
    onMounted(()=>{
      // @ts-ignore
      time.value=dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')
      console.log(time)
    })
    return{
      change,
      time
    }
  }
}
</script>

<style lang="less" scoped>

.header{
  height: 50px;
  line-height: 50px;
  background:#1e78bf;
  color:#fff;
  display: flex;
  .icon{
  font-size: 24px;
  flex: 1;
  i{
    cursor: pointer;
  }
  
}
.rightcss{
    //float:right;
    padding-right:20px;
    //font-size: 16px;
    .time{
      font-size: 16px;
    }
  }
}

.wrapper{
  margin: 10px;
}

</style>

