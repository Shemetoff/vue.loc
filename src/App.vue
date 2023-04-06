<template>
  <nav-bar></nav-bar>
  <div class="app">

    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/UI/NavBar";
export default {
  components: {NavBar}
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  .app {
    padding: 20px;
    min-height: 100vh;
  }


</style>
