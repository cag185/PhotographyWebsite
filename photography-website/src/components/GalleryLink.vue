<template>
  <RouterLink to="/${props.link}">Go to ${props.linkName}</RouterLink>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  linkName: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
