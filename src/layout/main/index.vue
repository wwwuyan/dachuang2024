<template>
  <div>
    <router-view v-slot="{Component}">
      <transition name="fade">
        <!--渲染layout一级路由组件-->
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<script lang="ts">
export default {
  name:"Main"
}
</script>

<style scoped>
/* .fade-enter-from{
  opacity:0
}
.fade-enter-active{
  transition: all 1s
}
.fade-enter-to{
  opacity:1
} */

</style>