<template>
  <main class="tw-grid tw-grid-cols-2 tw-min-w-full tw-w-full tw-h-screen">
    <div class="md:tw-col-span-1 tw-col-span-2">
      <router-view />
    </div>
    <div
      class="tw-mx-auto md:tw-col-span-1 tw-col-span-2 tw-hidden md:tw-flex tw-justify-center tw-items-center tw-w-full tw-bg-secondary">
      <img src="../assets/images/women.svg" class="tw-aspect-square" />
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped></style>