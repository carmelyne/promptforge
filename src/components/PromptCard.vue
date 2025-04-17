<template>
  <div class="border rounded p-4 bg-white dark:bg-gray-800 dark:text-white">
    <h2 class="font-semibold text-lg">{{ prompt.title }}</h2>
    <p class="text-sm mt-2 line-clamp-3">{{ prompt.content }}</p>
    <div class="text-xs text-gray-500 dark:text-gray-400 mt-2">{{ prompt.tags }}</div>
    <router-link :to="`/prompt/${prompt.id}`" class="mt-3 inline-block text-blue-500 hover:underline">Edit</router-link>
  </div>
</template>

<script setup>
/**
 * Props:
 * - prompt: The prompt object with id, title, content, tags, model, etc.
 */
defineProps({
  prompt: { type: Object, required: true }
});
</script>