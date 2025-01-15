<template>
  <section
    id="download"
    class="relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 py-32"
  >
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto">
        <h3 class="text-sm font-bold uppercase tracking-wider mb-4">
          TÉLÉCHARGEZ MAINTENANT
        </h3>
        <h2 class="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Rejoignez des millions d'utilisateurs et découvrez la puissance de
          Cabbie dans vos mains.
        </h2>
        <div class="hero-buttons">
          <img
            @click="showAppStoreQR"
            class="btn"
            src="../assets/AppleStore.png"
            alt="App Store"
          />
          <img
            @click="showGooglePlayQR"
            class="btn"
            src="../assets/Sans titre.png"
            alt="Google Play"
          />
        </div>
        <!-- QR Code Components -->
        <QRCode ref="appStoreQR" />
        <QRCode ref="googlePlayQR" />
      </div>
    </div>
    <!-- Background Design Elements -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div
        class="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-br from-gray-100/50 to-transparent transform -rotate-12"
      ></div>
      <div
        class="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-bl from-gray-100/50 to-transparent transform rotate-12"
      ></div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import QRCode from "./QRCode.vue";

// Références pour les composants QR
const appStoreQR = ref(null);
const googlePlayQR = ref(null);

// URLs des stores (à remplacer par vos vraies URLs)
const APP_STORE_URL = "https://apps.apple.com/votre-app";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/votre-app";

// Fonctions pour afficher les QR codes
const showAppStoreQR = () => {
  appStoreQR.value.showQR(APP_STORE_URL);
};
const showGooglePlayQR = () => {
  googlePlayQR.value.showQR(GOOGLE_PLAY_URL);
};

// Fonction pour faire défiler vers la section suivante
const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};
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
.hero-buttons {
  display: flex;
  justify-content: center; /* Centrer les éléments horizontalement */
  gap: 2rem; /* Ajouter un espace entre les images */
  margin-top: 2rem; /* Ajout d'un petit espace en haut pour la présentation */
}

.hero-buttons .btn {
  display: flex;
  justify-content: center; /* Centrer l'image à l'intérieur du bouton */
  align-items: center; /* Centrer l'image verticalement */
  width: 220px; /* Largeur fixe pour chaque image */
  height: auto;
}
@media (max-width: 768px) {
  .download-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
