<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { mountHeroAnimation } from '../../theme/hero-animation.js'

const animationContainer = ref<HTMLElement>()
let destroyAnimation: (() => void) | undefined

onMounted(async () => {
  destroyAnimation = await mountHeroAnimation(animationContainer.value)
})

onBeforeUnmount(() => destroyAnimation?.())
</script>

<template>
  <div
    ref="animationContainer"
    class="fb-hero__animation fb-vp-hero-animation"
    data-fb-hero-animation
    aria-hidden="true"
  ></div>
</template>
