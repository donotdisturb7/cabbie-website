<template>
  <section id="features" class="features section">
    <div class="container">
      <h2 class="text-center text-4xl font-bold mb-8">
        Pourquoi choisir <span class="highlighted">Cabbie</span> ?
      </h2>
      <div class="features-grid">
        <!-- Feature cards -->
        <div class="feature-card alt-style">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'clock']" />
          </div>
          <div class="feature-content">
            <h3>Disponible 24/7</h3>
            <p>Commandez un taxi à tout moment, jour et nuit. Notre réseau de chauffeurs est toujours disponible pour vous servir.</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'credit-card']" />
          </div>
          <div class="feature-content">
            <h3>Paiement Sécurisé</h3>
            <p>Payez en toute sécurité via l'application. Cartes bancaires, Apple Pay et Google Pay acceptés.</p>
          </div>
        </div>
        <div class="feature-card alt-style">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'star']" />
          </div>
          <div class="feature-content">
            <h3>Chauffeurs Certifiés</h3>
            <p>Tous nos chauffeurs sont des professionnels certifiés, pour vous garantir des trajets en toute sécurité.</p>
          </div>
        </div>
        <div class="feature-card">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'location-dot']" />
          </div>
          <div class="feature-content">
            <h3>Suivi en Temps Réel</h3>
            <p>Suivez votre chauffeur en temps réel et partagez votre position avec vos proches pour plus de tranquillité.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Highlighted word color */
.highlighted {
  color: #ffc300;
}

/* Section background color */
.features.section {
  background-color: #001D3D;
  color: white;
  padding: 5rem 1rem;
  height:80vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.text-center {
  color: white;
}

.features-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 4rem;
}

.feature-card {
  display: flex;
  align-items: center;
  padding: 1.5rem;
  border-radius: 12px;
  background: white;
  color: #001D3D;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card.alt-style {
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
}

.feature-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: 3rem;
  color: #ffc300;
  margin-right: 1.5rem;
}

.feature-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.feature-content p {
  font-size: 1rem;
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  .feature-card {
    flex-direction: column;
    text-align: center;
  }
  .feature-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
