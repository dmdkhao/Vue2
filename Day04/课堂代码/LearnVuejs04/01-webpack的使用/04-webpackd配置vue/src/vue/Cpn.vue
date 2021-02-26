<template>
  <div>
    <h2>here is CPN</h2>
    <span>{{fullname}}</span>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data(){
    return {
      firstName: "yi",
      lastName: "suo"
    }
  },
  computed: {
    fullname(){
      return this.firstName + this.lastName;
    }
  }
}
</script>

<style scoped>

</style>