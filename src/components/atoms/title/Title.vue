<script setup lang="ts">

defineProps<{
  title: string | undefined
}>()
</script>

<template>
  <div class="Title">
    <h1>{{ title }}</h1>
  </div>
</template>

<style>
.Title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  margin-top: 48px;
  margin-bottom: 50px;
  letter-spacing: 12px;
  color: rgb(250, 204, 8);
  height: 200px;
  padding: 20px;
  border-bottom: 2px solid white;
  margin-left: 0;
  background-image: url("@/assets/pokemon-1577763_1280.jpg");
  background-size: cover;
}
</style>
