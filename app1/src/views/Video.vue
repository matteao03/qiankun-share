<template>
  <div class="home">
    <div>心儿永远向往着未来；现在却常是忧郁。</div>
    <my-video />
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    components: {
        MyVideo: window.MyVideo
    }
}
</script>

<style scoped>
.home {
    width: 800px;
    margin: 0 auto;
}
</style>