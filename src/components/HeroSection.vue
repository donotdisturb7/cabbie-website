<template>
  <section
    class="min-h-screen relative flex flex-col justify-center px-4 md:px-8 pt-24 pb-16"
  >
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <!-- Contenu -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h1
            class="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 animate-fade-in"
          >
            Votre mobilité, réinventée !
          </h1>
          <p
            class="text-lg md:text-xl text-text/80 mb-8 max-w-2xl animate-fade-in animation-delay-200"
          >
            Cabbie révolutionne vos déplacements en vous connectant
            instantanément avec des chauffeurs de taxi professionnels.
          </p>
          <div
            class="w-80 h-auto flex sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <button
              @click="showAppStoreQR"
              class="w-48 transform hover:scale-105 transition-transform"
            >
              <img
                class="w-full h-auto"
                src="../assets/AppleStore.png"
                alt="Télécharger sur l'App Store"
              />
            </button>
            <button
              @click="showGooglePlayQR"
              class="w-48 transform hover:scale-105 transition-transform"
            >
              <img
                class="w-full h-auto"
                src="../assets/Sans titre.png"
                alt="Télécharger sur Google Play"
              />
            </button>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full md:w-1/2 animate-fade-in animation-delay-600">
          <div class="bg-primary/10 rounded-3xl p-8 max-w-sm mx-auto">
            <img
              src="@/assets/cabbieApp.svg"
              alt="Application Cabbie"
              class="w-full h-auto transform hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- QR Codes -->
    <QRCode ref="appStoreQR" />
    <QRCode ref="googlePlayQR" />

    <!-- Flèche de défilement -->
    <button
      @click="scrollToNext"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 group focus:outline-none"
      aria-label="Défiler vers le bas"
    >
      <svg
        class="w-8 h-8 text-text/80 group-hover:text-text transition-colors animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
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

const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
};
</script>

<style scoped>
/* Animations */
.animate-fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
