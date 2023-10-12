<template>
    <div>
        <h1 class="green">Homeview {{ homeTest }}</h1>
    </div>
</template>
<script setup lang="ts">
defineProps<{
  homeTest: string
}>()
</script>
<style lang="">
    
</style>
