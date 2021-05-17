<template>
  <div id="app">
    <router-view></router-view>
    <div id="appContainer"></div>
  </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    methods: {
    },
}
</script>

<style scoped>
#app {
    height: 100vh;
    text-align: center;
    position: relative;
}
</style>
