<template>
 <section class="hero section">
<div class="container">
<div class="hero-wrapper">
<div class="hero-content">
<h1>Votre mobilité, réinventée !</h1>
<p>
 Cabbie révolutionne vos déplacements en vous connectant
 instantanément avec des chauffeurs de taxi professionnels.
</p>
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
</div>
<div class="hero-image">
<img src="@/assets/cabbieApp.svg" alt="Phone Image" />
</div>
</div>
</div>
<!-- QR Code Components -->
<QRCode ref="appStoreQR" />
<QRCode ref="googlePlayQR" />
<!-- Flèche de défilement -->
<div class="scroll-arrow" @click="scrollToNext">
<span></span>
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
.hero {
padding-top: 8rem;
min-height: 90vh;
display: flex;
align-items: center;
height: 99.8vh;
position: relative; /* Ajouté pour positionner la flèche */
}
/* Styles existants... */
.hero-wrapper {
display: flex;
align-items: center;
gap: 4rem;
}
.hero-image {
flex: 1;
min-height: 400px;
max-width: 300px;
background-color: rgba(var(--primary), 0.1);
border-radius: 20px;
}
.hero-image img {
width: 100%;
height: auto;
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
.hero-buttons .btn {
display: inline-flex;
align-items: center;
width: 220px;
height: auto;
}
/* Styles pour la flèche de défilement */
.scroll-arrow {
position: absolute;
bottom: 2rem;
left: 50%;
transform: translateX(-50%);
cursor: pointer;
animation: bounce 2s infinite;
}
.scroll-arrow span {
display: block;
width: 30px;
height: 30px;
border-bottom: 3px solid var(--text);
border-right: 3px solid var(--text);
transform: rotate(45deg);
opacity: 0.8;
transition: opacity 0.3s;
}
.scroll-arrow:hover span {
opacity: 1;
}
@keyframes bounce {
0%, 20%, 50%, 80%, 100% {
transform: translateY(0) translateX(-50%);
 }
40% {
transform: translateY(-10px) translateX(-50%);
 }
60% {
transform: translateY(-5px) translateX(-50%);
 }
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
.scroll-arrow {
bottom: 1rem;
 }
}
</style>