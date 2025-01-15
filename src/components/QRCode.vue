<!-- QRCode.vue -->
<template>
  <div v-if="isModalVisible" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h2>Installez l'App Cabbie</h2>
      <div class="qr-container">
        <qrcode-vue :value="qrValue" size="250" :margin="2" level="H" />
      </div>
      <p class="instructions">
        Scannez le code QR avec l'appareil photo de votre téléphone pour
        télécharger l'application Cabbie.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";

const isModalVisible = ref(false);
const qrValue = ref("");

const showQR = (url) => {
  qrValue.value = url;
  isModalVisible.value = true;
};

const closeModal = () => {
  isModalVisible.value = false;
};

defineExpose({
  showQR,
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 2.5rem 3rem;
  border-radius: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 90%;
  width: 400px;
  border:3px solid #ffc300;
}

.modal h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

.qr-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:1rem;
}

.instructions {
  color: #666;
  font-size: 1rem;
  line-height: 1.1;
  margin: 0;
}
</style>