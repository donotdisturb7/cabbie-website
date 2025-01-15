<template>
  <section id="features" class="features section">
    <div class="container">
      <h2 class="section-title">
        Pourquoi choisir <span class="highlighted">Cabbie</span> ?
      </h2>
      <div class="features-grid">
        <!-- Feature cards -->
        <div class="feature-card alt-style" data-aos="fade-up" data-aos-delay="100">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'clock']" />
          </div>
          <div class="feature-content">
            <h3>Disponible 24/7</h3>
            <p>Commandez un taxi à tout moment, jour et nuit. Notre réseau de chauffeurs est toujours disponible pour vous servir.</p>
          </div>
        </div>

        <div class="feature-card" data-aos="fade-up" data-aos-delay="200">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'credit-card']" />
          </div>
          <div class="feature-content">
            <h3>Paiement Sécurisé</h3>
            <p>Payez en toute sécurité via l'application. Cartes bancaires, Apple Pay et Google Pay acceptés.</p>
          </div>
        </div>

        <div class="feature-card alt-style" data-aos="fade-up" data-aos-delay="300">
          <div class="feature-icon">
            <font-awesome-icon :icon="['fas', 'star']" />
          </div>
          <div class="feature-content">
            <h3>Chauffeurs Certifiés</h3>
            <p>Tous nos chauffeurs sont des professionnels certifiés, pour vous garantir des trajets en toute sécurité.</p>
          </div>
        </div>

        <div class="feature-card" data-aos="fade-up" data-aos-delay="400">
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
.features.section {
  background-color: #001D3D;
  color: white;
  padding: clamp(3rem, 8vw, 5rem) 1rem;
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 3vw, 2rem);
}

.section-title {
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: bold;
  margin-bottom: clamp(2rem, 6vw, 4rem);
  color: white;
}

.highlighted {
  color: #ffc300;
  display: inline-block;
  position: relative;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: clamp(1.5rem, 4vw, 2rem);
  margin-top: clamp(2rem, 4vw, 4rem);
}

.feature-card {
  display: flex;
  align-items: flex-start;
  padding: clamp(1.25rem, 3vw, 1.5rem);
  border-radius: 12px;
  background: white;
  color: #001D3D;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card.alt-style {
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  font-size: clamp(2rem, 5vw, 3rem);
  color: #ffc300;
  margin-right: clamp(1rem, 3vw, 1.5rem);
  flex-shrink: 0;
}

.feature-content {
  flex: 1;
}

.feature-content h3 {
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: clamp(0.5rem, 2vw, 0.75rem);
  font-weight: 600;
  line-height: 1.3;
}

.feature-content p {
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 1.6;
  color: #2c3e50;
}

/* Tablettes */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile large */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  .feature-card {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }
}

/* Mobile petit */
@media (max-width: 480px) {
  .feature-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .feature-icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  .section-title {
    font-size: 1.75rem;
  }
}

/* Gestion du mode sombre */
@media (prefers-color-scheme: dark) {
  .feature-card {
    background: rgba(255, 255, 255, 0.95);
  }

  .feature-card.alt-style {
    background: linear-gradient(135deg, rgba(248, 249, 250, 0.95), rgba(255, 255, 255, 0.95));
  }

  .feature-content p {
    color: #1a2633;
  }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
  .feature-card {
    transition: none;
  }

  .feature-card:hover {
    transform: none;
  }
}
</style>