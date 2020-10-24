<template>
   <div>
    <footer id="footer">
      <!-- tag后面是标签名，意思就是这个router-link标签显示为li标签 -->
      <ul>
        <router-link tag="li" to="/home">
          <i class="el-icon-s-home"></i>
          <p>首页</p>
        </router-link>
        <router-link tag="li" to="/shopping">
          <i class="el-icon-s-goods"></i>
          <p>购物</p>
          <span v-show="cartCounter > 0">{{ cartCounter }}</span>
        </router-link>
        <router-link tag="li" to="/my">
          <i class="el-icon-user-solid"></i>
          <p>我的</p>
        </router-link>
      </ul>
    </footer>
  </div> 
</template>

<script>
  export default {
      name: "TabBar",
      computed:{
        cartCounter () {
          var cartCounter=this.$store.state.cartCounter
          return cartCounter;
        },
      }
  }
</script>

<style scope>
    #footer{ width:100%; height:50px; background: white; border-top:2px #ebe8e3 solid; position: fixed; left: 0; bottom:0;}
    #footer ul{ display: flex; text-align: center; height:50px; align-items:center;}
    #footer ul li{position: relative; flex:1; height:40px;}
    /* router-link自带了active,点击那个路由那个路由发生变化的效果，所以直接写样式 */
    #footer ul li.active{ color: #f03d37;}
    #footer ul li.router-link-active{ color: #f03d37;}
    #footer ul i{ font-size: 20px;}
    #footer ul p{ font-size: 12px; line-height: 18px;}
    #footer ul span{
      position: absolute;
      top:0;
      left:54%;
      background-color:deeppink;
      padding: 2px;
      color: antiquewhite
    }
</style>
