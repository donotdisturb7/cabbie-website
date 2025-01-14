<script setup>
import { ref, onMounted } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTaxi, faUser, faClock, faCreditCard, faStar, faLocationDot, faBriefcase, faMobile, faGift, faShield, faHeadset, faRoute } from '@fortawesome/free-solid-svg-icons'
import { faAppStore, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import Features from './components/Features.vue'
import Drivers from './components/Drivers.vue'
import DownloadSection from './components/DownloadSection.vue'
import FooterSection from './components/FooterSection.vue'

library.add(faTaxi, faUser, faClock, faCreditCard, faStar, faLocationDot, faBriefcase, faMobile, faGift, faShield, faHeadset, faRoute, faAppStore, faGooglePlay)
</script>

<template>
  <div class="app">
    <NavBar />
    <main>
      <HeroSection />
      <Features />
      <Drivers />
      <DownloadSection />
    </main>
    <FooterSection />
  </div>
</template>

<style>
@import './assets/main.css';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.section {
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.text-center {
  text-align: center;
}

.btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
}

.btn-primary {
  background-color: var(--primary);
  color: var(--text);
  border: none;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 195, 0, 0.3);
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.98);
  padding: 1rem 0;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text);
}

.nav-center {
  display: flex;
  gap: 2.5rem;
  align-items: center;
}

.nav-center a {
  text-decoration: none;
  color: var(--text);
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.nav-center a:hover,
.nav-center a.active {
  color: var(--primary);
}

.dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-icon {
  font-size: 0.8rem;
  opacity: 0.5;
}

.contact-button {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  border: 2px solid var(--primary);
  border-radius: 50px;
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-button:hover {
  background: var(--primary);
  color: white;
}

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

.drivers {
  background-color: var(--background);
}

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

.footer {
  background-color: var(--text);
  color: var(--background);
  padding: 2rem 0;
}

.footer-content {
  text-align: center;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .nav-center, .nav-right {
    display: none;
  }
  
  .nav {
    justify-content: center;
  }
  
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
  
  .hero-buttons, .download-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
