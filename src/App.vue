<template>
  <div id="app">
    <template>
      <el-container >
        <el-header>


        </el-header>


        <el-container >


          <el-aside >
            <el-row class="tac">
              <el-col>

                <el-menu
                  :default-active="'/config'"
                  router
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-submenu index="/config" @open="handleOpen">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>配置管理</span>
                    </template >
                      <el-menu-item index="config/generation">配置生成</el-menu-item>
                      <el-menu-item index="edit">配置修改</el-menu-item>
                  </el-submenu>
                </el-menu>


              </el-col>
            </el-row>
          </el-aside>


<!--          主区域-->
          <el-main>
            <router-view/>

          </el-main>
        </el-container>
      </el-container>
    </template>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$route.fullPath)
      this.$router.push(key)


    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);

    }
  }
}
</script>

<style>

</style>
