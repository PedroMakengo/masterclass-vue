import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '../model/user'

export const useAuthStore = defineStore('auth', () => {
  const isLoading = ref(false)
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  async function login(email: string, password: string) {
    try {
      isLoading.value = true
      await new Promise((resolve) => setTimeout(resolve, 3000))
      user.value = {
        id: '1',
        name: 'Dev Makengo',
        email: email,
      }
    } finally {
      isLoading.value = false
    }
  }

  async function logout() {
    try {
      isLoading.value = true
      await new Promise((resolve) => setTimeout(resolve, 1000))
      user.value = null
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    isAuthenticated,
    user,
    login,
    logout,
  }
})
