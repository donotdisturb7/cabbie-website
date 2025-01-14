<template>
  <section id="download" class="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 py-32">
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h3 class="text-sm font-bold uppercase tracking-wider mb-4">TÉLÉCHARGEZ MAINTENANT</h3>
        <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Rejoignez des millions d'utilisateurs et découvrez la puissance de Cabbie dans vos mains.
        </h2>
        <div class="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <a href="#download" class="btn btn-primary">
            <font-awesome-icon :icon="['fab', 'app-store']" /> App Store
          </a>
            <a href="#download" class="btn btn-primary">
              <font-awesome-icon :icon="['fab', 'google-play']" /> Google Play
            </a>
        </div>
      </div>
    </div>
    <!-- Background Design Elements -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-br from-gray-100/50 to-transparent transform -rotate-12"></div>
      <div class="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-bl from-gray-100/50 to-transparent transform rotate-12"></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.download {
  background-color: var(--primary);
  color: white;
}

.download h2 {
  margin-bottom: 1rem;
}

.download p {
  margin-bottom: 2rem;
}

.download-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

@media (max-width: 768px) {
  .download-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
