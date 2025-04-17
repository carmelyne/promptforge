<template>
  <div class="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
    <header class="p-4 bg-gray-100 dark:bg-gray-800 flex justify-between items-center">
      <h1 class="text-2xl font-bold">PromptForge</h1>
      <button @click="toggleDark" class="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded">
        {{ isDark ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </header>
    <router-view />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const isDark = ref(false);

const toggleDark = () => {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
};

onMounted(() => {
  const saved = localStorage.getItem('darkMode');
  if (saved === 'dark') isDark.value = true;
  else if (saved === 'light') isDark.value = false;
  else isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', isDark.value);
});

watch(isDark, val => {
  localStorage.setItem('darkMode', val ? 'dark' : 'light');
});
</script>