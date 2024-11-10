<template>
  <div class="p-2 m-2">
    <div class="font-bold text-3xl mb-4">{{ props.name }}</div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-container"
      >
        <img
          :src="image"
          alt="Image"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

// Define the constants array for the images we will eventaully load in.
const images = ref([]);

const loadImages = () => {
  const imagesContext = require.context(
    "@/assets/Gallery 1/",
    false,
    /\.(png|jpe?g|svg)$/
  );
  images.value = imagesContext
    .keys()
    .map((fileName) => imagesContext(fileName));
};

// on the mounting of the page load the images.
onMounted(() => {
  loadImages();
});
</script>
