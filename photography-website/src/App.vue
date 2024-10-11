<template>
  <SplashPage></SplashPage>
  <GalleryLink />
</template>

<script>
import SplashPage from "./components/SplashPage.vue";
import GalleryLink from "./components/GalleryLink.vue";

export default {
  name: "App",
  components: {
    SplashPage,
    GalleryLink,
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
