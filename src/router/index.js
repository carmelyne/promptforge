import { createRouter, createWebHistory } from 'vue-router';
import PromptList from '../pages/PromptList.vue';
import PromptEditor from '../pages/PromptEditor.vue';

const routes = [
  { path: '/', name: 'Home', component: PromptList },
  { path: '/prompt/new', name: 'NewPrompt', component: PromptEditor },
  { path: '/prompt/:id', name: 'EditPrompt', component: PromptEditor, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;