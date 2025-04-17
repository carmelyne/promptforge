<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">{{ isEdit ? 'Edit Prompt' : 'New Prompt' }}</h1>
    <form @submit.prevent="onSubmit" class="space-y-4">
      <div>
        <label class="block mb-1">Title</label>
        <input v-model="title" class="w-full border rounded p-2" required />
      </div>
      <div>
        <label class="block mb-1">Content</label>
        <textarea v-model="content" class="w-full border rounded p-2" rows="6" required></textarea>
      </div>
      <div>
        <label class="block mb-1">Tags (comma-separated)</label>
        <input v-model="tags" class="w-full border rounded p-2" />
      </div>
      <div>
        <label class="block mb-1">Model</label>
        <input v-model="model" class="w-full border rounded p-2" placeholder="e.g., gpt-4" />
      </div>
      <div class="flex space-x-2">
        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded">{{ isEdit ? 'Update' : 'Create' }}</button>
        <router-link to="/" class="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePromptStore } from '../store/prompts';

const route = useRoute();
const router = useRouter();
const store = usePromptStore();
const isEdit = Boolean(route.params.id);
const id = Number(route.params.id);

const title = ref('');
const content = ref('');
const tags = ref('');
const model = ref('');

onMounted(async () => {
  await store.init();
  if (isEdit) {
    const p = store.prompts.find(item => item.id === id);
    if (p) {
      title.value = p.title;
      content.value = p.content;
      tags.value = p.tags;
      model.value = p.model;
    }
  }
});

function onSubmit() {
  const payload = { title: title.value, content: content.value, tags: tags.value, model: model.value };
  if (isEdit) {
    store.updatePrompt(id, payload);
  } else {
    store.addPrompt(payload);
  }
  router.push('/');
}
</script>