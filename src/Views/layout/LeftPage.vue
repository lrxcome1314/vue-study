<template>
  <el-menu :default-active="route.path" class="el-menu-vertical-demo" :collapse="isClose" active-text-color="#ffd04b"
    background-color="#112f50" text-color="#fff" router>
    <el-menu-item><template #title><span>学生信息管理系统</span></template></el-menu-item>
    <el-menu-item index="/"><el-icon>
        <location />
      </el-icon><span>系统首页</span></el-menu-item>
    <el-sub-menu index="/goods/">
      <template #title>
        <el-icon>
          <Grid />
        </el-icon>
        <span>产品管理</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="/goods/list">产品列表</el-menu-item>
        <el-menu-item index="/goods/category">产品分类</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">
      <el-icon>
        <ChatLineRound />
      </el-icon>
      <template #title>用户管理</template>
    </el-menu-item>
    <el-menu-item index="/order/orderlist">
      <el-icon>
        <document />
      </el-icon>
      <template #title>订单管理</template>
    </el-menu-item>
    <el-menu-item index="5">
      <el-icon>
        <setting />
      </el-icon>
      <template #title>购物车管理131</template>
    </el-menu-item>
  </el-menu>
</template>

<script>
//import { ref } from 'vue';
import { useRoute } from 'vue-router';
export default {
  props: ["isClose"],
  setup () {
    //const isCollapse=ref(false);
    const route = useRoute();
    //console.log(route);
    return {
      //isCollapse,
      route
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-menu {
  border-right: none;
}
</style>