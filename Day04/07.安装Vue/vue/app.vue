<template>
  <div>
    <div>{{message}}</div>
    <h2 class="title">{{title}}</h2>
    <Cpn />
  </div>
</template>

<script>
  import Cpn from './Cpn.vue'
  export default {
    name: "app",
    components:{
      Cpn
    },
    data() {
      return {
        message: 'hello webpack',
        title: 'title'
      }
    }
  }
</script>

<style scoped>
  .title{
    color: green;
  }
</style>