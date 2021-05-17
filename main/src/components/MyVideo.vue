<template>
  <div class="hello">
      <video id="my-player"   
        class="video-js"
        controls
        preload="auto"  
        poster="../assets/logo.png">
          <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
        </video>   
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

export default {
    name: 'MyVideo',
    mounted() {
        this.player = videojs('my-player');
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
    width: 500px;
    height: 300px;
    margin: 0 auto;
}
</style>
