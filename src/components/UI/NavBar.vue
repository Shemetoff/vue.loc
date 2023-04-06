<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__buttons">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/about')">About</my-button>
    </div>

<!--    <router-link to="/posts" >Posts</router-link>
    <router-link to="/about" >About</router-link>-->
  </div>
</template>

<script>
//import MyButton from "@/components/UI/MyButton";
export default {
  name: "NavBar",
  //components: {MyButton}
}
</script>

<style scoped>
  .navbar {
    display: flex;
    gap: 30px;
    background: teal;
    color: #fff;
    box-shadow: 2px 2px 4px gray;
    align-items: center;
    padding: 15px;
    justify-content: space-between;
  }
  .navbar__buttons {
    display: flex;
    gap: 30px;
  }
</style>
