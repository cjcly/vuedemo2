<template>
  <div class="cart-one-item">
    <div class="left">
      <img :src="imgUrl">
    </div>
    <div class="right">
      <div class="text">
        <h3 class="title">{{ title }}</h3>
        <p class="content">{{ content }}</p>
        <div>
          <span class="price"> ￥
            <span class="price-number">{{ price }}</span>
          </span>
        </div>
      </div>
      <div class="cart-btn">
        <my-input-number :count="counter" @changeNumberEvent="getOperator"></my-input-number>
      </div>
    </div>
    <div class="dialog-box" >
      <el-dialog
        :visible.sync="dialogVisible"
        width="80%"
        :show-close="false">
        <span>你确定删除该商品么？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="danger" @click="confirmDelete">删除</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'one-commodity',
  props: ['itemId','imgUrl', 'title', 'content', 'price', 'count'],
  data () {
    return {
      dialogVisible: false
    }
  },
  computed: {
    id () {
      return this.itemId;
    },
    counter () {
      let that = this;//用that保存this
      let cartGoods = this.$store.state.cartGoods;
      let result = 0;
      cartGoods.some(good => {
        //因为这个函数this指向当前函数，that.id就相当于执行了computed里的函数
        if (good.id === that.id) {
          result = good.count;
        }
      });
      return result;
    }
  },
  methods: {
    getOperator (op) {
      if (op === 'plus') {
        this.$store.commit('addGoods', this.id);
      } else {
        if (this.counter === 1) {
          this.dialogVisible = true;
        } else {
          this.$store.commit('reduceGoods', this.id);
        }
      }
    },
    confirmDelete () {
      this.dialogVisible = false;
      this.$store.commit('deleteGoodsFromCart', this.id);
    }
  }
}
</script>

<style scoped lang="scss" >


</style>

