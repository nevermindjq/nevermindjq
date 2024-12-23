<script setup>

import {ref} from "vue";
import TabHeader from "@/components/tabs/TabHeader.vue";
import TabContent from "@/components/tabs/TabContent.vue";

const {data} = defineProps(["data"]);

const selected = ref(0);

</script>

<template>
  <!-- Tabs -->
  <div class="grid grid-cols-3 gap-2">
    <TabHeader v-for="(item, index) in data" @click="selected = index" :is_selected="selected === index" :text="item.name"/>
  </div>

  <!-- Tab Contents -->
  <TabContent v-for="(item, index) in data" v-show="selected === index" :list="item.list"/>
</template>