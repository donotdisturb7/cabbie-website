<template>
  <section id="drivers" class="drivers section">
    <div class="container">
      <h2 class="text-center">Avantages pour les Chauffeurs</h2>
      <div class="features-grid">
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'briefcase']" />
          <h3>Revenu Supplémentaire</h3>
          <p>Travaillez selon votre propre emploi du temps et augmentez vos revenus grâce à Cabbie.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'mobile']" />
          <h3>Application Intuitive</h3>
          <p>Gagnez du temps grâce à une application facile à utiliser pour gérer vos trajets et vos paiements.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'gift']" />
          <h3>Avantages Exclusifs</h3>
          <p>Profitez de réductions sur le carburant et l'entretien grâce à nos partenaires.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'shield']" />
          <h3>Sécurité Avant Tout</h3>
          <p>Travaillez dans un environnement sécurisé avec un système de notation des clients et une assistance dédiée.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'headset']" />
          <h3>Support 24/7</h3>
          <p>Accédez à un support client disponible à tout moment pour vous accompagner.</p>
        </div>
        <div class="feature-card">
          <font-awesome-icon :icon="['fas', 'route']" />
          <h3>Optimisation des Courses</h3>
          <p>Maximisez vos trajets grâce à un algorithme qui vous connecte aux clients les plus proches.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.drivers {
  background-color: var(--background);
}

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
