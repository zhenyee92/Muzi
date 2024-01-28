<template>
    <div>
      <h1>Data from Server</h1>
      <!-- 显示从服务器接收到的数据 -->
      <p v-if="data">Received: {{ data }}</p>
      <!-- 显示错误信息 -->
      <p v-if="error">Error: {{ error }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        data: null,
        error: null,
      };
    },
    mounted() {
      // 当组件挂载时，发送 GET 请求
      axios.get('http://localhost:3000/api/data')
        .then(response => {
          // 请求成功，将响应数据保存到 data 属性
          this.data = response.data;
        })
        .catch(error => {
          // 请求失败，将错误信息保存到 error 属性
          this.error = error.message;
        });
    },
  };
  </script>
  
  <style scoped>
  /* 添加你的 CSS 样式 */
  </style>
  