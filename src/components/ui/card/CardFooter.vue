<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'basis-1/2 flex flex-col justify-evenly text-right border-r-[1px] border-gray-200 pl-1 pb-1 pr-4 pt-0',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
