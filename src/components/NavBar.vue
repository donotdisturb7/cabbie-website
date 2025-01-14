<template>
  <nav :class="['fixed top-8 left-1/2 -translate-x-1/2 flex items-center gap-16 z-50 px-8 py-2 transition-all duration-300',
    isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100']">
    <div class="h-10">
      <img src="@/assets/Logo.png" alt="Cabbie Logo" class="h-full w-auto" />
    </div>
    <div class="flex items-center gap-8">
      <a href="#" class="text-text font-medium hover:text-primary transition-colors active">Accueil</a>
      <a href="#features" class="text-text font-medium hover:text-primary transition-colors">Fonctionnalités</a>
      <a href="#download" class="text-text font-medium hover:text-primary transition-colors">Télécharger</a>
      <a href="#contact" class="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
        Nous Contacter
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
let lastScrollPosition = 0

const handleScroll = () => {
  const currentScrollPosition = window.scrollY
  isScrolled.value = currentScrollPosition > lastScrollPosition && currentScrollPosition > 50
  lastScrollPosition = currentScrollPosition
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@media (max-width: 768px) {
  nav > div:last-child {
    display: none;
  }
}
</style>
