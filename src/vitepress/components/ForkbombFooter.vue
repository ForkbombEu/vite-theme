<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import type { ForkbombThemeConfig } from '../types'

const { site, theme } = useData<ForkbombThemeConfig>()
const config = computed(() => theme.value.forkbomb?.footer)
const brand = computed(() => theme.value.forkbomb?.brand)
const links = computed(() => config.value?.links ?? [])
const year = new Date().getFullYear()
</script>

<template>
  <footer class="fb-footer fb-vp-footer">
    <div class="fb-container fb-footer__inner">
      <div class="fb-stack">
        <a class="fb-brand" :href="withBase(brand?.home ?? '/')">
          <span class="fb-brand__name">{{ brand?.name ?? site.title }}</span>
          <span class="fb-brand__expression" aria-hidden="true">{{ brand?.expression ?? ':(){ :|:& };:' }}</span>
        </a>
        <p>{{ config?.message ?? site.description }}</p>
      </div>

      <div v-if="links.length">
        <h3>Explore</h3>
        <ul>
          <li v-for="link in links" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div>
        <h3>Build</h3>
        <p>Vite + VitePress<br />Agent-ready theme</p>
      </div>
    </div>

    <div class="fb-container fb-footer__legal">
      <span>{{ config?.copyright ?? `© ${year} ${brand?.name ?? site.title}` }}</span>
      <span>Powered by Forkbomb Vite Theme</span>
    </div>
  </footer>
</template>
