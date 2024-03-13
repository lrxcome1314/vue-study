<template>
  <div>
    <h3>订单列表</h3>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Approved by">
          <el-input v-model="formInline.user" placeholder="Approved by" clearable />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
          <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Query</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-button type="info" @click="addGoods">添加</el-button>
    </div>
    <div>
      <div>
        <el-table :data="data" style="width: 100%">
          <el-table-column prop="Id" label="Date" width="180" />
          <el-table-column prop="GoodsTypeId" label="Date" width="180" />
          <el-table-column prop="GoodsName" label="Name" width="180" />
          <el-table-column prop="GoodsDetail" label="GoodsDetail" />
          <el-table-column prop="GoodsNum" label="GoodsNum" />
          <el-table-column prop="GoodsPrice" label="GoodsPrice" />
          <el-table-column label="操作">
            <template #default="scoped">
              <el-button @click="handleClick(scoped.index, scoped.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { mapState, useStore } from 'vuex'
export default {
  data () {
    return {
      data: []
    };
  },
  computed: {
    //...mapState['counter']
  },
  mounted () {
    axios.get('/api/GetGooddata')
      .then(response => {
        //console.log(response.data);
        this.data = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  },
  setup () {
    const router = useRouter()
    const store = useStore();
    const handleClick = (index, row) => {
      //console.log(row);
      store.commit("settitle", "编辑")
      store.dispatch("setDataListAsync", { row })
      //console.log(store.state.data);
      router.push('/goods/add')
      //const id = row.Id;
      //console.log(id);
      //store.state
      /* axios.get("/api/GetById", { params: { Id: row.Id } }).then(function (response) {
        console.log('1313');
      })
        .catch(error => {
          console.error(error);
        }) */
    }
    const formInline = reactive({
      user: '',
      region: '',
      date: '',
    })
    const selecById = () => {
      //console.log('submit!')
    }
    const onSubmit = () => {
      console.log('submit!')
    }
    const addGoods = () => {
      console.log('nihao')
      router.push('/goods/add')
    }
    return { handleClick, formInline, selecById, onSubmit, addGoods }
  }
}
</script>


<style lang='scss' scoped></style>