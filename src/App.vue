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
                  default-active="1"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose">
                  <el-submenu index="1" @open="handleOpen">
                    <template slot="title">
                      <i class="el-icon-location"></i>
                      <span>配置管理</span>
                    </template >
                      <el-menu-item index="1-1">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                      <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-submenu>
                </el-menu>


              </el-col>
            </el-row>
          </el-aside>


<!--          主区域-->
          <el-main>Main</el-main>
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
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>

</style>
