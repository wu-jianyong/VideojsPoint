<template>
  <div class="video">
    <video
      controls="true"
      id="video"
      ref="video"
      class="video-js vjs-big-play-centered"
      >
    <source :src="videoSrc" type="video/mp4"/>
 </video>
    <button @click="add">添加</button>
    <button @click="removeAll">移除所有断点</button>
    <button @click="removeAllsome">移除部分断点</button>
    <button @click="pre">上一个</button>
    <button @click="next">下一个</button>
    <button @click="reset">重置所有仅剩下23</button>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import 'videojs-markers'
export default {
  name: 'js-init',
  data () {
    return {
      videoSrc: 'https://static.gethover.com/build/images/falcon/index/media/index_tvc2_cn.mp4'
    }
  },
  methods: {
    reset () {
      this.player.markers.reset([{time: 23, text: 'I\'m reset'}])
    },
    pre () {
      this.player.markers.prev()
    },
    next () {
      this.player.markers.next()
    },
    removeAllsome () {
      this.player.markers.remove([1, 2])
    },
    removeAll () {
      this.player.markers.removeAll()
    },
    add () {
      console.log(this.$refs.video.currentTime)
      const currentTime = this.$refs.video.currentTime
      this.player.markers.add([{time: currentTime, text: 'I\'m  new added', overlayText: '1'}])
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 初始化videojs
      this.player = videojs('video', {
        controls: true, // 必填，显示各控制组件
        autoplay: false, // 是否自动播放
        preload: 'auto', // 预加载
        // poster: 'http://vjs.zencdn.net/v/oceans.png', // 视频封面
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
        onMarkerClick: function (marker) {
          console.log('点击了' + marker.time)
        },
        onMarkerReached: function (marker) {
          console.log('到达了' + marker.time)
        },
        markerStyle: {
          // 标记样式
          width: '1em',
          height: '2em',
          bottom: '-1em',
          'background-color': 'green',
          position: 'absolute'
        },
        markerTip: {
          display: true,
          text: function (marker) {
            return '断点TEXT:' + marker.time
          },
          time: function (marker) {
            return marker.time
          }
        },
        breakOverlay: {
          display: true,
          displayTime: 3,
          style: {
            'width': '100%',
            'height': '20%',
            'background-color': 'rgba(0,0,0,0.7)',
            'color': 'white',
            'font-size': '17px'
          },
          text: function (marker) {
            return 'Break overlay: ' + marker.overlayText
          }
        },
        markers: [
          {
            time: 10,
            text: '444',
            overlayText: '1',
            class: 'red-marker-class'
          },
          {
            time: 20,
            text: '444',
            overlayText: '1',
            class: 'red-marker-class'
          },
          {
            time: 30,
            text: '444',
            overlayText: '1',
            class: 'red-marker-class'
          },
          {
            time: 78,
            text: '444',
            overlayText: '1',
            class: 'red-marker-class'
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
