<template>
  <li role="presentation" class="mr-2" v-bind:class="[ activetab === tabNumber ? 'active' : '' ]">
    <button @click="$emit('someEvent')" class="inline-block p-4 hover:border-b-2 rounded-t-lg hover:border-gray-300 dark:hover:text-gray-300" 
    v-bind:class="[ activetab === tabNumber ? 'border-b-2 text-gray-300' : '' ]" id="profile-tab" data-tabs-target="#profile" 
    type="button" role="tab" aria-controls="profile" aria-selected="false">{{ title }}</button>
</li>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  props: {
    title: [String, Number],
    tabNumber: Number
  },
  setup() {
    const activetab = ref(1);
    return {
      activetab
    }
  }
}
</script>
