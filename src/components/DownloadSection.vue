<template>
  <section id="download" class="download section">
    <div class="container text-center">
      <h2>Téléchargez Cabbie</h2>
      <p>Disponible sur iOS et Android</p>
      <div class="download-buttons">
        <a href="#" class="btn btn-primary">
          <font-awesome-icon :icon="['fab', 'app-store']" /> App Store
        </a>
        <a href="#" class="btn btn-primary">
          <font-awesome-icon :icon="['fab', 'google-play']" /> Google Play
        </a>
      </div>
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
