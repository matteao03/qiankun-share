<template>
  <div class="home">
    <div>
      <router-link to="/home">返回首页</router-link>
    </div>
    <h2>app1 页面</h2>
    <span>相信吧，快乐的日子将会来临！</span>
    <el-tabs>
      <el-tab-pane >
        <div>
        element-ui
        </div>
        </el-tab-pane>
    </el-tabs>
    <div style="margin-top:50px;">
      <router-link to="/app1/video">点击进入视频页</router-link>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>
.home {
    width: 800px;
    margin: 0 auto;
}
</style>