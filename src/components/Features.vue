<template>
  <section id="features" class="features section">
    <div class="container">
      <h2 class="text-center">Pourquoi choisir Cabbie ?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'clock']" />
          <h3>Disponible 24/7</h3>
          <p>Commandez un taxi à tout moment, jour et nuit. Notre réseau de chauffeurs est toujours disponible pour vous servir.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'credit-card']" />
          <h3>Paiement Sécurisé</h3>
          <p>Payez en toute sécurité via l'application. Cartes bancaires, Apple Pay et Google Pay acceptés.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'star']" />
          <h3>Chauffeurs Certifiés</h3>
          <p>Tous nos chauffeurs sont des professionnels certifiés, pour vous garantir des trajets en toute sécurité.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'location-dot']" />
          <h3>Suivi en Temps Réel</h3>
          <p>Suivez votre chauffeur en temps réel et partagez votre position avec vos proches pour plus de tranquillité.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card svg {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.feature-card h3 {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
