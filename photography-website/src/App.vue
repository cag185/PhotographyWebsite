<template>
  <div>
    <RouterLink class="router-link-style" to="/">Home </RouterLink>
    <RouterLink class="router-link-style" to="/portraits"
      >Portraits
    </RouterLink>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script>
import SplashPage from "./components/SplashPage.vue";

export default {
  name: "App",
  components: {
    SplashPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
