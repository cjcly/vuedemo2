import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    username: '', // 用户
    isLogin: false,//登录状态
    address:[
      {
        name: '王小明',
        phone: 13568978546,
        city: '广州',
        detailAdd: '天河区花城大道111号'
      },
      {
        name: '李小丽',
        phone: 13568911546,
        city: '北京',
        detailAdd: '朝阳区朝阳北路111号'
      },
    ],
    cartGoods: [], // 添加到购物车中的商品
    cartCounter: 0, // 购物车物品总数
    GoodsCurrentSelKind: 0 ,// 表示显示全部分类商品
    count:0//防止支付后在点击购买和在详情页点击购买出现bug
  },
  mutations: {
    //添加商品
    addGoodsToCart (state, item) {
      //下面的if判断是防止支付后在点击购买和在详情页点击购买出现bug
      if(!state.count){
        item.count=state.count
      }
      item.isInCart = true;
      item.count++;
      state.cartGoods.push(item);
      state.cartCounter++;
      state.count=item.count
    },
    //当这个商品数量只有1时，在减少的时候就删除这个商品
    deleteGoodsFromCart(state, itemId) {
      state.cartCounter--;
      state.cartGoods.some((val, index, Goods) => {
        //这里面的Goods就是cartGoods
        if (val.id === itemId) {
          val.isInCart = false;
          val.count--;
          Goods.splice(index, 1);
          return true;
        }
      })
    },
    //增加商品数量
    addGoods(state, itemId){
      state.cartCounter++;
      //下面的代码解决的是当点的是同个商品时，只有这个商品数量增加
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.count++
          return true;
        }
      })
    },
    //减少商品购买数量的时候
    reduceGoods(state, itemId){
      state.cartCounter--;
       //下面的代码解决的是当点的是同个商品时，只有这个商品数量减少
      state.cartGoods.some(val => {
        if (val.id === itemId) {
          val.count--;
          return true;
        }
      })
    },
    changeCurrentSelKind(state, kind){
      state.GoodsCurrentSelKind = kind;
    },
    //支付后清除商品和商品数量
    cleargoods(state,goods){
      state.cartGoods=goods.cartGoods;
      state.cartCounter=goods.cartCounter;
      //防止支付后在点击购买和在详情页点击购买出现bug
      state.count=0;
    },
    //登录时候
    login(state, username){
      state.username = username;
      state.isLogin = true;
    },
    //退出登陆的时候
    logout(state){
      state.isLogin = false;
    },
    //新增地址
    addNewAddress(state, newAdd){
      state.address.push(newAdd);
    },
    //编辑地址
    modifyAddress(state, item){
      state.address[item.index] = item.value;
    },
    //删除地址
    deleteAddress(state, index){
      state.address.splice(index, 1);
    }
  },
  actions: {
  },
  modules: {
  }
})
