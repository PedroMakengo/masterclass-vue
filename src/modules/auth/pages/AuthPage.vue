<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
//Components
import Loading from '@/shared/components/Loding.vue'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

async function handleLogin() {
  await authStore.login('devmakengo2021@gmail.com', '123456')
  redirect()
}

async function redirect() {
  const query = route.query.redirect as string

  const result =
    typeof query === 'string' && query.startsWith('/') ? query : '/'

  await router.replace(result)
}
</script>

<template>
  <Loading v-if="authStore.isLoading" />
  <div
    v-else
    class="flex flex-col gap-4 justify-center items-center min-h-screen"
  >
    <h1 class="text-4xl font-black">Auth Page</h1>
    <button class="btn btn-primary" @click="handleLogin">Login</button>
  </div>
</template>
