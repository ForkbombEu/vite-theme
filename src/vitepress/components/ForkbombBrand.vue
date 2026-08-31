<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import type { ForkbombThemeConfig } from '../types'

const { site, theme } = useData<ForkbombThemeConfig>()
const brand = computed(() => theme.value.forkbomb?.brand)
const name = computed(() => brand.value?.name ?? site.value.title)
const expression = computed(() => brand.value?.expression ?? ':(){ :|:& };:')
const home = computed(() => withBase(brand.value?.home ?? '/'))
</script>

<template>
  <a class="fb-brand fb-vp-brand" :href="home" :aria-label="`${name} home`">
    <span class="fb-brand__name">{{ name }}</span>
    <span class="fb-brand__expression" aria-hidden="true">{{ expression }}</span>
  </a>
</template>
