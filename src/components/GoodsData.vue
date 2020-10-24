<template>
    <div id="goodsdata">
        <el-container>
            <el-header>
                <i class="el-icon-arrow-left" @click="goback"></i>
                <h3 class='data'>这是商品详情页</h3>
            </el-header>
            <el-main>
                <div class="text">
                    <div class='img'>
                        <img :src="goods.img" >
                    </div>
                    <h3 class="title">{{goods.title}}</h3>
                    <p class="content">{{goods.content}}</p>
                    <div>
                        <span class="price"> ￥
                            <span class="price-number">{{goods.price}}</span>
                        </span>
                    </div>
                </div>
            </el-main>
            <el-footer>
                 <p v-for="index in 10" :key='index'>
                    这是{{goods.title}}的商品详细介绍
                </p>
            </el-footer>
        </el-container> 
        <div class="addshop" @click="addshop">加入购物车</div> 
    </div>
</template>

<script>
export default {
    name:'GoodsList',
    data(){
        return{
        }
    },
    computed: {
        goods() {
            return this.$route.query;
        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        addshop(){
            let isInCart = this.goods.isInCart;
            if (isInCart) {//如果isInCart为真添加商品数量，为假添加商品
                this.$store.commit('addGoods', this.goods.id);
            } else {
                this.$store.commit('addGoodsToCart', this.goods);
            }
        }
    },
};
</script>

<style scope lang='scss'>
    #goodsdata{
        position: relative;
        .el-header{
            display: flex;
            align-items: center;
            height:40px !important;
        }
        i{
            font-size: 20px;
            margin-left: 10px;
            margin-top: -16px;
        }
        .data{
            margin-left: 80px;
            margin-top: -14px;
        }
        .img{
            margin-top: -20px;
            margin-bottom: 20px;
        }
        .title{
            margin-top: -20px; 
        }
        .content{
            margin-top: 8px;
            margin-bottom: 10px;
        }
        .addshop{
            position: absolute;
            width:100%;
            height:50px;
            top:555px;
            background-color:deeppink;
            line-height: 50px;
        }    
    }
</style>
