<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
// 导入 DataComponent
import DataComponent from './components/DataComponent.vue'
</script>
<template>
  <header>
    <!-- 省略其他代码 ... -->

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      
      <!-- 使用 DataComponent 组件 -->
      <DataComponent />

      <!-- 省略其他代码 ... -->
    </div>
  </header>

  <RouterView />
</template>
