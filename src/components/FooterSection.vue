<template>
  <footer class="bg-gray-900 text-white py-12 bg-custom">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-semibold mb-4">À propos</h3>
          <p class="text-gray-400">
            Cabbie révolutionne le transport urbain en connectant les passagers
            aux chauffeurs de taxi professionnels.
          </p>
        </div>
        <div>
          <h3 class="text-xl font-semibold mb-4">Liens Rapides</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                >Accueil</a
              >
            </li>
            <li>
              <a
                href="#features"
                class="text-gray-400 hover:text-white transition-colors"
                >Fonctionnalités</a
              >
            </li>
            <li>
              <a
                href="#download"
                class="text-gray-400 hover:text-white transition-colors"
                >Télécharger</a
              >
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li class="text-gray-400">
              Email:
              <a href="mailto:contact@cabbie.com" class="text-blue-500"
                >contact@cabbie.com</a
              >
            </li>
            <li class="text-gray-400">Tél: +33 1 2 34 56</li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-semibold mb-4">Suivez-nous</h3>
          <div class="flex gap-4">
            <a href="#" class="text-gray-400 customhover transition-colors">
              <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
            </a>
            <a href="#" class="text-gray-400 customhover transition-colors">
              <font-awesome-icon :icon="['fab', 'x-twitter']" size="lg" />
            </a>
            <a
              href="https://www.instagram.com/cab.admin/"
              class="text-gray-400 customhover transition-colors"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
            </a>
            <a href="#" class="text-gray-400 customhover transition-colors">
              <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
            </a>
          </div>

          <a href="#"
            ><img src="../assets/Logo.png" alt="logo cabbie" class="logofooter"
          /></a>
        </div>
      </div>
      <!-- Centrer l'image ici -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>
          &copy; {{ new Date().getFullYear() }} Cabbie. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<style>
.bg-custom {
  background-color: #001d3d;
}

.customhover:hover {
  color: #ffc300;
}

.logofooter {
  width: 3.5em;
  height: auto;
}
</style>
