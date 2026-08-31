<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    tone?: 'light' | 'muted' | 'dark'
    watermark?: string
  }>(),
  { tone: 'light', watermark: '' },
)
</script>

<template>
  <section
    class="fb-section"
    :class="[
      `fb-section--${tone}`,
      { 'fb-section--watermark': watermark },
    ]"
    :data-watermark="watermark || undefined"
  >
    <div class="fb-container">
      <h2 class="fb-section__title">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>
