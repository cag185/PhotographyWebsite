<template>
  <div class="font-bold text-3xl">{{ props.name }}</div>
</template>

<script>
const props = defineProps({
  name: String,
});
</script>
