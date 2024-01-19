import { defineStore } from 'pinia';

export const useGeneralStore = defineStore('general', () => {
  const theme = ref('light');

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
  }

  return {
    theme,
    toggleTheme,
  };
}, { persist: true });
