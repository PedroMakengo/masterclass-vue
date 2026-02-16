<script lang="ts" setup>
interface TitleProps {
  text: string
  sub?: string
}

defineProps<TitleProps>()
</script>

<template>
  <div>
    <h1 class="text-lg font-black">{{ text }}</h1>
    <h2 class="text-zinc-500" v-if="sub">{{ sub }}</h2>
  </div>
</template>
