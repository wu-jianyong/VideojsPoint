<template>
  <div id="app">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="Js初始化" name="jsInit"><JsInit></JsInit></el-tab-pane>
    <el-tab-pane label="html初始化" name="htmlInit"><HtmlInit></HtmlInit></el-tab-pane>
    <el-tab-pane label="Js动态初始化" name="jsDynamicInit"><JsDynamicInit></JsDynamicInit></el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import JsInit from './components/js-init'
import HtmlInit from './components/html-init'
import JsDynamicInit from './components/js-dynamic-init'
export default {
  name: 'App',
  data () {
    return {
      activeName: 'jsInit'
    }
  },
  components: {JsInit, HtmlInit, JsDynamicInit},
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
      // 切换tab时销毁视频用dispose
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
