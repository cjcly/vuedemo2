<template>
    <div id="home">
        <HomeHeader />
        <div class="main">
            <ul :key="animatedCurrentKey">
                <li v-for="(item,index) in name" :key="index" v-show="isCurrent(item.kind)">
                    <GoodsList
                        :itemId="item.id"
                        :imgUrl="item.img"
                        :title="item.title"
                        :content="item.content"
                        :price="item.price"
                        :count="0"
                    ></GoodsList>
                </li>
            </ul>   
        </div>
    </div>
</template>

<script>
import HomeHeader from '@/components/HomeHeader'
import GoodsList from '@/components/GoodsList'
import data from '@/assets/data/goods.js'
export default {
    name:'Home',
    data(){
        return{
            name:[],
        }
    },
    components:{
        HomeHeader,
        GoodsList 
    },
    computed: {
        animatedCurrentKey () {
            return this.$store.state.GoodsCurrentSelKind;
        }
    },
    methods:{
        // xyz(v){
        //     var nm=v,arr=this.name;
        //     this.name=[];
        //     if(nm=='全部'){
        //         this.name=data.data;
        //     }else{
        //         for(var i=0;i<data.data.length;i++){
        //             if(nm==data.data[i].kind){
        //                arr=this.name.push(data.data[i])
        //             }
        //         }   
        //     }   
        // }
        //分类按钮点击时
        isCurrent (itemKind) {
            let currentKind = this.$store.state.GoodsCurrentSelKind,isbool=false;
            if (currentKind === 0) {
                //0表示全部商品
                return true;
            } else {
                //由于数据里的kind的值是字符串所以这里只能是两个==号，如果是数字可以用三个
                //这样写的好处就是点击水果只显示水果，其他隐藏了，所以在全部里面购买了水果，在点击水果时就能显示购买数量了
               return itemKind == currentKind;
            }
        }
     },
     mounted(){
        this.name=data.data
     }
}
</script>

<style scope lang='scss'>
    .main{
        padding-bottom: 36px;
        overflow: hidden;
    }
</style>
