<template>
    <div>
        <h1 class="text-4xl">Homeview {{ homeTest }}</h1>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  homeTest: string
}>()
</script>
<style lang="">
    
</style>
