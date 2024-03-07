<script>
export default {
  name: "Config",
  created() {
    console.log(this.$route.meta)
  }
}
</script>

<template>

  <div class="card-container">
    <div v-if="$route.meta.showFather" >
      你在干什么
      <el-card>
        <el-row justify="center">
          <el-col :span="10">
            <el-col>
              你好

            </el-col>

          </el-col>

        </el-row>
      </el-card>
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>