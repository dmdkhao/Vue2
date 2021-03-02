<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";
export default {
  name: "TabBar",
  components: {TabBarItem}
}
</script>

<style scoped>


#tabbar {
  display: flex;
  background-color: #f2f2f2;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -2px 10px rgba(100,100,100,.2);
}
</style>
