<script setup>

const {list} = defineProps(["list"]);

const with_techs = list.filter(x => x.techs !== undefined), general = list.filter(x => x.techs === undefined);

</script>

<template>
  <div :class="[`tabs-content-root`, `grid`, (`grid-rows-` + (with_techs.length + (general.length > 0 ? 1 : 0))), `gap-2`, `mt-2`]" v-show="with_techs.length > 0">
    <div v-for="item in with_techs" class="flex flex-wrap tabs-content">
      <a class="category" :href="item.url" :target="item.url == null ? `_self` : `_blank`">
        <component :is="item.icon" />
      </a>
      <a class="py-2" v-for="tech in item.techs" :href="tech.url" target="_blank">
        <component :is="tech.icon" />
      </a>
    </div>
    <div :class="[`flex`, `flex-wrap`, `tabs-content`, { 'border-t-2': with_techs.length > 0 }, `pt-2`]" v-show="general.length > 1">
      <a class="py-2" v-for="item in general" :href="item.url" target="_blank">
        <component :is="item.icon" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.tabs-content-root {
  overflow: hidden;
  animation: fadeInHeight 2s;
}

.tabs-content {
  @apply mx-1;

  overflow: hidden;
  animation: fadeInOpacity 2s;

  a.category {
    @apply border-r-2 my-2;

    border-color: var(--category-border-color);
  }
}
</style>