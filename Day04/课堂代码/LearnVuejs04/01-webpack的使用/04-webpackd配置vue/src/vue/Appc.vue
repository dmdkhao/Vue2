<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="btnClick()">按钮</button>
    <p>{{name}}</p>
    <span>in vue</span>
    <cpn1/>
  </div>
</template>

<script>

import cpn1 from "./Cpn.vue"

export default {
  name: "Appc",
  data() {
    return{
      message: "hello Vuejs",
      name: "suo",
    }
  },
  methods: {
    btnClick(){
      console.log("按钮被点击");
    }
  },
  components: {
    cpn1
  }
}
</script>

<style scoped>

</style>