<script setup lang="ts">
import useUserStroe from "@/store/modules/user";


const userStore = useUserStroe();
</script>

<template>
  <div>{{ userStore.name }}</div>
  <RouterView/>
</template>

<style scoped>
</style>
