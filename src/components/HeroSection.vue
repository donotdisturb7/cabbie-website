<template>
  <section class="hero section">
    <div class="container">
      <div class="hero-wrapper">
        <div class="hero-content">
          <h1>Bienvenue sur Cabbie</h1>
          <p>Cabbie révolutionne vos déplacements en vous connectant instantanément avec des chauffeurs de taxi professionnels.</p>
          <div class="hero-buttons">
            <a href="#download" class="btn btn-primary">
              <font-awesome-icon :icon="['fab', 'app-store']" /> App Store
            </a>
            <a href="#download" class="btn btn-primary">
              <font-awesome-icon :icon="['fab', 'google-play']" /> Google Play
            </a>
          </div>
        </div>
        <div class="hero-image">
          <img src="@/assets/cab.png" alt="Phone Image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.hero {
  padding-top: 8rem;
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.hero-wrapper {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.hero-image {
  flex: 1;
  min-height: 500px;
  background-color: rgba(var(--primary), 0.1);
  border-radius: 20px;
}

.hero-content {
  flex: 1;
  text-align: left;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--text);
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: var(--text);
  opacity: 0.8;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-wrapper {
    flex-direction: column;
    gap: 2rem;
  }
  
  .hero-image {
    min-height: 300px;
    width: 100%;
  }
  
  .hero-content {
    text-align: center;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
