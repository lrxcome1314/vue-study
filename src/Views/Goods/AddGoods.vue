<template>
  <div>
    <h3>添加商品</h3>
    <el-form>
      <el-form-item label="商品类型">
        <el-input v-model="sizeForm.Id"></el-input>
      </el-form-item>
      <el-form-item label="商品类型">
        <el-input v-model="sizeForm.GoodsTypeId"></el-input>
      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="sizeForm.GoodsName"></el-input>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input v-model="sizeForm.GoodsDetail"></el-input>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="sizeForm.GoodsNum"></el-input>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="sizeForm.GoodsPrice"></el-input>
      </el-form-item>
      <el-form-item label="活动名称">
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <!-- <el-input v-model="sizeForm.name"></el-input> -->
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, useStore } from 'vuex'
/* const sizeForm = reactive({
  GoodsTypeId: 1313,
  GoodsName: "1313",
  GoodsDetail: "31331",
  GoodsNum: 1233,
  GoodsPrice: 3131,
  //       type: [],
  //       resource: '',
  //       desc: ''
}); */
export default {
  data () {
    return {
      //sizeForm
    }
  },
  methods: {
    //{params:sizeForm}
    onSubmit () {
      console.log(this.title)
      if (this.title === "编辑") {
        axios.get('/api/updateGooddata', { params: this.sizeForm })
          .then(response => {
            console.log('修改成功');
            //console.log(response.data);
            //this.data = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
      else {
        axios.get('/api/AddGooddata', { params: this.sizeForm })
          .then(response => {
            //console.log(response.data);
            //this.data = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }

      //axios({

      //})

      //console.log('submit!', sizeForm);
    }
  },
  setup () {
    let sizeForm = reactive({
      Id: 2,
      GoodsTypeId: 1313,
      GoodsName: "1313",
      GoodsDetail: "31331",
      GoodsNum: 1233,
      GoodsPrice: 3131,
      //       type: [],
      //       resource: '',
      //       desc: ''
    });
    const store = useStore();
    let title = store.state.title
    //console.log(store.state.data.row);
    if (title === '编辑') {
      sizeForm = store.state.data.row;
    }
    //console.log(typeof (sizeForm));
    return { sizeForm, title }
  }
}

</script>

<style></style>