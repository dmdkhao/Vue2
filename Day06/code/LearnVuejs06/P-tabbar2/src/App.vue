<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/shouye_1.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/shouye.svg">
        <div slot="item-font">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/leimupinleifenleileibie.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/leimupinleifenleileibie2.svg">
        <div slot="item-font">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/car" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/gouwuchekong.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/gouwucheman.svg">
        <div slot="item-font">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/wode.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/wode_1.svg">
        <div slot="item-font">我的</div>
      </tab-bar-item>

    </tab-bar>
  </div>
</template>

<script>

import router from '../router/index'

import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem";

export default {
  name: 'App',
  router,
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  @import "./assets/css/base.css";
</style>
