// firebase-config.js
// Importa las funciones necesarias desde los SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyANmPIkq2scSmoA-SGRv-tCh7WKWLcH4rQ",
  authDomain: "formulariogithub.firebaseapp.com",
  projectId: "formulariogithub",
  storageBucket: "formulariogithub.appspot.com",
  messagingSenderId: "377516389796",
  appId: "1:377516389796:web:93c39e97d017fe16093d31",
  measurementId: "G-NVGW5516Y0"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Exportar la instancia de Firestore para usar en otros scripts
export { db };
