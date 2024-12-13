<template>
  <div>
    <Count />
    <br />
    <LoveTalk />
  </div>
</template>

<script setup lang="ts" name="App">
import { useRouter } from "vue-router";
import Count from "./components/Count.vue";
import LoveTalk from "./components/LoveTalk.vue";
</script>
