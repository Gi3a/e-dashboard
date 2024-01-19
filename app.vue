<template>
  <main :class="theme">
    <NuxtLayout>
      <NuxtPage class="bg-background" />
    </NuxtLayout>
  </main>
</template>

<script setup lang="ts">

const store = useGeneralStore();

const theme = computed(() => store.theme);
</script>