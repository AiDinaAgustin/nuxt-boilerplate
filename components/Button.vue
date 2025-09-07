<script setup>
defineProps({});
</script>

<template>
  <button
      v-bind="$attrs"
      class="font-medium rounded-lg text-sm px-5 py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    <slot />
  </button>
</template>