<template>
  <main class="tw-grid tw-grid-cols-2 tw-min-w-full tw-w-full">
    <div class="tw-col-span-1">
      <router-view />
    </div>
    <div class="tw-mx-auto tw-col-span-1 flex tw-justify-center tw-items-center tw-w-full tw-bg-auth">
      <img src="../assets/images/women.svg" class="tw-aspect-square" />
    </div>
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped></style>