<script setup>

import {data} from "@/information.js";
import Tabs from "@/components/tabs/Tabs.vue";
import Telegram from "@/icons/contacts/Telegram.vue";
import GitHub from "@/icons/contacts/GitHub.vue";

import "@/styles/main.css";

</script>

<template>
  <main class="container flex justify-center items-center mx-auto">
    <div class="box-border border-4 rounded-2xl border-black shadow-md shadow-black p-6">
      <div class="grid grid-cols-1 gap-6">
        <h1 class="font-mono text-2xl tracking-widest mx-1">Nevermindjq</h1>

        <div>
          <div class="flex items-center justify-center mb-4">
            <h3 class="font-mono text-xl tracking-widest border-b-2 border-pink-500">Skills</h3>
          </div>

          <Tabs :data="data"/>
        </div>

        <div class="grid grid-cols-1">
          <div class="flex items-center justify-center mb-4">
            <h3 class="font-mono text-xl tracking-widest border-b-2 border-pink-500">Contacts</h3>
          </div>
          <div class="flex">
            <a class="flex-1" href="tg://resolve?domain=nevermindjq">
              <div>
                <Telegram />
              </div>
            </a>
            <a class="flex-1" href="https://github.com/nevermindjq" target="_blank">
              <div>
                <GitHub />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
a.flex-1 {
  @apply flex justify-center items-center;

  > div {
    @apply shadow-md shadow-white rounded-full p-2;

    border: 2px black solid;
    background: rgba(0,0,0,0.2);
  }

  > div:hover {
    background-color: black;
    transition: background-color 400ms;
  }
}

</style>