<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div :class="cn('basis-1/2 flex gap-y-1.5 p-1 pt-0', props.class)">
    <slot />
  </div>
</template>
