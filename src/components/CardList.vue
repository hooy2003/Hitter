<script setup lang="ts">
import ClothingItem from './ClothingItem.vue'

import { onMounted, ref, type Ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

import { Button } from '@/components/ui/button'

type Item = {
  id: number
  item_name: string
  item_url: string
  price: number
}
type Shop = {
  clothing_item: Item[]
  id: number
  shop_name: string
}
const shops: Ref<Shop[]> = ref([])

async function getClothingShop() {
  let { data: clothing_shops, error } = await supabase.from('clothing_shop').select(`
    id, shop_name,
    clothing_item (
      id, item_name, item_url, price
    )
  `)
  shops.value = clothing_shops || []
}

onMounted(() => {
  getClothingShop()
})
</script>

<template>
  <main class="flex justify-center">
    <section class="mt-8 flex flex-col gap-4 max-w-[400px]">
      <div v-for="shop in shops" :key="shop.id">
        <ClothingItem v-for="item in shop.clothing_item" :key="item.id">
          <template #content><img :src="item.item_url" alt="" /></template>
          <template #shopname>{{ shop.shop_name }}</template>
          <template #itemname>{{ item.item_name }}</template>
          <template #price>NT.{{ item.price }}</template>
        </ClothingItem>
      </div>
    </section>
  </main>
</template>
