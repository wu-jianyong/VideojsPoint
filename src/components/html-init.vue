<template>
  <div class="video">
    <video
      id="video"
      class="video-js vjs-big-play-centered"
      controls
      preload="auto"
      poster="//vjs.zencdn.net/v/oceans.png"
      width="600"
      height="400"
      data-setup='{}'
      >
    <source :src="videoSrc" type="video/mp4"/>
 </video>
  </div>
</template>
<script>
// html初始化就没法画标记了
import 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-markers'
export default {
  name: 'html-init',
  data () {
    return {
      videoSrc: 'https://static.gethover.com/build/images/falcon/index/media/index_tvc2_cn.mp4'
    }
  }
}
</script>
<style>
/*使播放按钮变圆形*/
.video-js .vjs-big-play-button {
    font-size: 2.5em;
    line-height: 2.3em;
    height: 2.5em;
    width: 2.5em;
    -webkit-border-radius: 2.5em;
    -moz-border-radius: 2.5em;
    border-radius: 2.5em;
    background-color: #73859f;
    background-color: rgba(115,133,159,.5);
    border-width: 0.15em;
    margin-top: -1.25em;
    margin-left: -1.75em;
}
/*暂停时也显示播放按钮*/
.vjs-paused.vjs-has-started .vjs-big-play-button {
    display: block;
}
/*将时长倒计时变当前时间和总时长（这两行不能换位置）*/
.video-js .vjs-time-control {display:block; min-width: 1.2em;text-align: center;padding: 0;}
.video-js .vjs-remaining-time {display: none;}
/*hover进度条无放大效果*/
.video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: 10px;
}
/*标记放大效果*/
.video-js .vjs-marker:hover {
  font-size: 1.6em;
}
</style>
