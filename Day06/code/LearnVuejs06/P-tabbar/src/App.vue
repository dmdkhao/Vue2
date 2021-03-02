<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/shouye_1.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shouye.svg" alt="">
        <div slot="item-title" >首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/leimupinleifenleileibie.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/leimupinleifenleileibie2.svg" alt="">
        <div slot="item-title">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/car" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/gouwuchekong.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/gouwucheman.svg" alt="">
        <div slot="item-title" >购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/wode.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/wode_1.svg" alt="">
        <div slot="item-title" >用户</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar";
import TabBarItem from "./components/TabBarItem";

import router from "../router"

export default {
  name: 'App',
  router,
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style>
  @import "./assets/css/base.css";

</style>
