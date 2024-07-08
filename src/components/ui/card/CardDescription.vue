<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <p :class="cn('text-sm text-gray-600 leading-normal tracking-widest', props.class)">
    <slot />
  </p>
</template>
