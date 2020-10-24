<template>
    <div id="homeheader">
        <h4>一小时到达</h4>
        <div class="tap-menu">
            <el-tabs :tab-position="'top'" style="height: 39px;" type="border-card"  v-model='goodsType'  @tab-click="changeGoodsType">
                <el-tab-pane label="全部" name="全部"></el-tab-pane>
                <el-tab-pane label="水果" name="水果"></el-tab-pane>
                <el-tab-pane label="蔬菜" name="蔬菜"></el-tab-pane>
                <el-tab-pane label="肉蛋" name="肉蛋"></el-tab-pane>
                <el-tab-pane label="速冻" name="速冻"></el-tab-pane>
                <el-tab-pane label="酒饮" name="酒饮"></el-tab-pane>
                <el-tab-pane label="乳品" name="乳品"></el-tab-pane>
                <el-tab-pane label="零食" name="零食"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeHeader',
    data(){
        return{
            kindToType: new Map([
                ['全部', 0],
                ['水果', 1],
                ['蔬菜', 2],
                ['肉蛋', 3],
                ['速冻', 4],
                ['酒饮', 5],
                ['乳品', 6],
                ['零食', 7]
            ]),
            goodsType: '全部'
        }
    },
    methods:{
        // chagegoodstype(goodsType){
        //     this.$emit("abc",goodsType);
        // }
        changeGoodsType () {
            this.$store.state.GoodsCurrentSelKind = this.kindToType.get(this.goodsType)
        },
    }
}
</script>

<style lang="scss" scoped>
</style>
