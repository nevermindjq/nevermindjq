<script setup>

const {is_selected, text} = defineProps(["is_selected", "text"]);

</script>

<template>
  <button :class="{ 'is-selected': is_selected }">
    {{ text }}
  </button>
</template>

<style scoped>
button {
  @apply mx-1 px-2 py-1 border-b-2 rounded-t;
}

.is-selected {
  background-color: var(--tab-selected-background-color) !important;
  border-color: var(--tab-selected-border-color) !important;
  transition: var(--tab-selected-transition);
}

button:hover {
  background-color: var(--tab-hover-background-color);
  border-color: var(--tab-hover-border-color);
  transition: var(--tab-hover-transition);
}

</style>