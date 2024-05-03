<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const tab = ref()
const route = useRoute()

tab.value = route.params.name
</script>

<template>
  <div class="nav-bar">
    <v-tabs
        v-model="tab"
        bg-color="#7f8c8d"
    >
      <v-tab value="one" @click="router.push({ name: 'home' })"><img src="../../../assets/pokeball.png" width="30" alt="poke-ball"/>Home</v-tab>
    </v-tabs>
  </div>
</template>

<style>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
