<template>
  <div class="video">
  <div ref="videoBox"></div>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-markers'
export default {
  name: 'js-dynamic-init',
  data () {
    return {
      videoSrc: 'https://static.gethover.com/build/images/falcon/index/media/index_tvc2_cn.mp4'
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 初始化videojs
      console.log(this.$refs.videoBox)
      const video = `
        <video
          id="myvideo"
          controls
          class="video-js vjs-big-play-centered"
        >
          <source src="${this.videoSrc}" type="video/mp4" />
        </video>
        `
      this.$refs.videoBox.innerHTML = video
      this.player = videojs('myvideo', {
        controls: true, // 必填，显示各控制组件
        autoplay: false, // 是否自动播放
        preload: 'auto', // 预加载
        poster: 'http://vjs.zencdn.net/v/oceans.png', // 视频封面
        width: '600px',
        height: '400px',
        loop: true, // 是否循环播放
        playbackRates: [0.5, 1, 1.5, 2], // 是否显示倍速
        controlBar: {
          volumePanel: {
            inline: false// 将音量横向改为纵向
          }
        }
      })
      this.player.markers({
        markerStyle: {
          // 标记样式
          width: '0.7em',
          height: '0.7em',
          bottom: '-0.15em',
          'border-radius': '50%',
          'background-color': 'orange',
          position: 'absolute'
        },
        markerTip: {
          display: false// 不显示标记的tip
        },
        markers: [
          {
            time: 9.5
          },
          {
            time: 16
          },
          {
            time: 23.6
          },
          {
            time: 28
          }
        ]
      })
    })
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
