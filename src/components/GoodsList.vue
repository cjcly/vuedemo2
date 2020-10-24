<template>
    <div id="goodslist">
        <div class="left">
            <img :src="imgUrl">
        </div>
        <div class="right">
            <div class="text">
                <h3 class="title"
                    :imgUrl="imgUrl"
                    :title="title"
                    :content="content"
                    :price="price"
                    @click="handellist()"
                >{{title}}</h3>
                <p class="content">{{content}}</p>
                <div>
                    <span class="price"> ￥
                        <span class="price-number">{{price}}</span>
                    </span>
                </div>
            </div>
        </div>
        <div class="cart-btn">
            <el-button icon="el-icon-goods" type="danger" v-show="counter === 0" circle  @click.stop.native="addGoodsToCart"></el-button>
            <MyInputNumber :count="counter" v-show="counter > 0" @changeNumberEvent="getOperator"></MyInputNumber>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        props: ['itemId','imgUrl', 'title', 'content', 'price', 'count'],
        data() {
            return {
                oneCommodity: {
                    id: this.itemId,
                    img: this.imgUrl,
                    title: this.title,
                    content: this.content,
                    price: this.price,
                    count: this.count,
                    isInCart: false,
                }
            }
        },
        computed:{
            counter () {
                let that = this;
                let cartGoods = this.$store.state.cartGoods;
                let result = 0;
                cartGoods.some(good => {
                    if (good.id === that.itemId) {
                        result = good.count;
                    }
                });
                    return result;
            }
        },
        methods:{
            handellist(imgUrl,title,content,price){
                this.$router.push({
                    path:"/goodsdata",
                    query: this.oneCommodity
                });
            },
            addGoodsToCart () {
                this.$store.commit('addGoodsToCart', this.oneCommodity);
            },
            getOperator (op) {
                let id = this.oneCommodity.id;
                //op
                if (op === 'plus') {
                    this.$store.commit('addGoods', id);
                } else {
                    let count = this.$store.state.cartGoods.filter(val => {
                        return val.id === id;
                    })[0].count;
                    if (count === 1) {
                        this.$store.commit('deleteGoodsFromCart', id);
                    } else {
                        this.$store.commit('reduceGoods', id);
                    }
                }
            },
        },
    };
</script>

<style scope lang='scss'>
    #goodslist{
        width: 100%;
        height:150px;
        margin-top: 2px;
        display: flex;
        justify-content:space-around;
        align-items: center;
        .left{
            width:80px;
            height:80px;
            img{
                width:100%;
                height:100%;
                border-radius: 100%;
                background-color:deeppink;
            }
        }
        .el-input-number{
            width:100px;
          span{
              width:34px;
            font-size: 14px;
          } 
          .el-input__inner{
              padding-left: 0px;
              padding-right: 0px;
          } 
        }
    }
</style>
