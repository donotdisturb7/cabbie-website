<template>
  <nav :class="['fixed top-8 left-1/2 -translate-x-1/2 flex items-center justify-between w-11/12 max-w-6xl z-50 px-8 py-2 transition-all duration-300',
    isScrolled ? 'opacity-0 -translate-y-full' : 'opacity-100']">
    <div class="h-10 flex items-center justify-between w-full md:w-auto">
      <a href="#"><img src="@/assets/Logo.png" alt="Cabbie Logo" class="logo" /></a>
      <button 
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-text hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          class="w-6 h-6"
        >
          <path 
            v-if="!isMenuOpen" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path 
            v-else 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            stroke-width="2" 
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
    
    <!-- Desktop Menu -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#" class="text-text font-medium hover:text-primary transition-colors active">Accueil</a>
      <a href="#features" class="text-text font-medium hover:text-primary transition-colors">Fonctionnalités</a>
      <a href="#download" class="text-text font-medium hover:text-primary transition-colors">Télécharger</a>
      <a href="#contact" class="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors">
        Nous Contacter
      </a>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-show="isMenuOpen"
      class="absolute top-full left-0 right-0 bg-white shadow-lg rounded-lg mt-2 p-4 md:hidden"
    >
      <div class="flex flex-col gap-4">
        <a href="#" class="text-text font-medium hover:text-primary transition-colors active">Accueil</a>
        <a href="#features" class="text-text font-medium hover:text-primary transition-colors">Fonctionnalités</a>
        <a href="#download" class="text-text font-medium hover:text-primary transition-colors">Télécharger</a>
        <a href="#contact" class="px-6 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors text-center">
          Nous Contacter
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)
let lastScrollPosition = 0

const handleScroll = () => {
  const currentScrollPosition = window.scrollY
  isScrolled.value = currentScrollPosition > lastScrollPosition && currentScrollPosition > 50
  lastScrollPosition = currentScrollPosition
  
  // Close mobile menu when scrolling
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

// Close menu when clicking outside
const handleClickOutside = (event) => {
  const nav = event.target.closest('nav')
  if (!nav && isMenuOpen.value) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Remove the previous media query as we're now handling mobile view with classes */
.logo{
  height:3em;
  width:auto;
}
</style>