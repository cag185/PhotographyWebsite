<template>
  <div>
    <RouterLink to="/">Home </RouterLink>
    <RouterLink to="/portraits">Portraits </RouterLink>
  </div>
  <main>
    <RouterView />
  </main>
</template>

<script>
import SplashPage from "./components/SplashPage.vue";
import GalleryLink from "./components/GalleryLink.vue";
import PortraitGallery from "./Galleries/PortraitGallery.vue";

export default {
  name: "App",
  components: {
    SplashPage,
    GalleryLink,
    PortraitGallery,
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
