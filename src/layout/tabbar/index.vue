<template>
  <div class="tabbar">
    <!--面包屑-->
    <div class="tabbar_left">
      <el-icon style="margin-right: 10px" @click="changeIcon">
        <component :is="fold?'Fold':'Expand'"></component>
      </el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--右侧设置-->
    <div class="tabbar_right">
      <el-button size="default" icon="Refresh" circle></el-button>
      <el-button
        size="default"
        icon="FullScreen"
        circle
      ></el-button>
      <el-button size="default" icon="Setting" circle></el-button>
      <img src="../../../public/vite.svg" style="width: 24px; height: 24px; margin: 0px 10px" />
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowRight } from "@element-plus/icons-vue";
import {ref} from 'vue'

// 控制菜单折叠和展开
let fold=ref(false)
const changeIcon=()=>{
  fold.value=!fold.value
}

</script>

<script lang="ts">
export default {
  name:"Tabbar"
}
</script>

<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
