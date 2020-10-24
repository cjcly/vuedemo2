<template>
  <div class="profile">
      <div class="login" v-if="!isLogin">
          <el-button type="success" @click="toLogin">登录</el-button>
      </div>
      <div class="user" v-else>
          <header class="profile-header">
            <h3>当前用户：{{ username }}</h3>
          </header>
          <main class="profile-body">
            <div class="address">
              <el-button @click.stop="toEditAddressPage">我的地址<i class="el-icon-arrow-right"></i></el-button>
            </div>
          </main>
          <footer class="profile-footer">
            <div>
              <el-button type="danger" @click="logout">退出登录</el-button>
            </div>
          </footer>
      </div>
      <transition enter-active-class="slideInRight">
        <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'My',
  data () {
    return {
    }
  },
  computed: {
    username () {
      return this.$store.state.username;
    },
    isLogin () {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    toLogin () {
      this.$router.push({
        path: '/Login',
      })
    },
    toEditAddressPage () {
      this.$router.push({
        path: '/my/EditAddressPage'
      })
    },
    logout () {
      this.$store.commit('logout'); 
      //this.$router.push("/my")不要加这行代码不然会有个报错但是不影响功能
    }
  }
}
</script>

<style scoped lang="scss">
   .profile{
    height: 100%;
    background-color: #fff;
    overflow: hidden;
  }
  .login{
    width: 100%;
    margin-top: 50%;
    transform: translateY(-50%);
    .el-input{
      width: 80%;
      margin-bottom: 10px; 
    }
  }
  .slideInRight{
    animation-duration: 0.25s;
  }
  .user{
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .profile-header{
      height: 50px;
      line-height: 50px;
    }
    .el-button{
      width: 100%;
      margin-top: 10px;
    }
  }
</style>

