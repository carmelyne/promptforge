<template>
  <div class="container mx-auto p-4">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Prompts</h1>
      <router-link to="/prompt/new" class="px-4 py-2 bg-blue-500 text-white rounded">New Prompt</router-link>
    </div>
    <div v-if="prompts.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <PromptCard v-for="p in prompts" :key="p.id" :prompt="p" />
    </div>
    <p v-else class="text-gray-500">No prompts yet. Click “New Prompt” to get started.</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { usePromptStore } from '../store/prompts';
import PromptCard from '../components/PromptCard.vue';

const store = usePromptStore();
onMounted(async () => {
  await store.init();
});
const prompts = store.prompts;
</script>