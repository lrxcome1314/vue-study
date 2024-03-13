<template>
  <div>
    <ul>
      <li v-for="item in data" :key="item.Id">{{item.Id+item.UserName }}</li>
    </ul>
  </div>
</template>
 
<script lang="js">
//import { ref } from 'vue';
import axios from 'axios';
 
export default {
  setup() {
    const data = ref([]);
 
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8077');
        
        data.value = response.data;
        //打印请求数据后返回的对象中是否有数据
        console.log(response.data);
      } catch (error) {
        console.error('Axios error:', error);
      }
    };
 
    fetchData();
 
    return {
      data,
    };
  },
};
</script>