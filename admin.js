// admin.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBHcbcRZ98WOHEQu9t2qnjLHP9Wvz_ggPs",
  authDomain: "aleixobook.firebaseapp.com",
  projectId: "aleixobook",
  storageBucket: "aleixobook.appspot.com", // Mantém correto por padrão
  messagingSenderId: "989202118697",
  appId: "1:989202118697:web:508c40a7acfbbf80dcc438",
  measurementId: "G-SXD8VPN6HK"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Evento de envio do formulário
document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value;
  const descricao = document.getElementById("descricao").value;
  const url = document.getElementById("url").value;
  const capa = document.getElementById("capa").value; // apenas a URL da imagem
  const preco = document.getElementById("preco").value;
  const estrelas = document.getElementById("estrelas").value;
  const categoria = document.getElementById("categoria").value.toLowerCase();

  const livro = {
    titulo,
    descricao,
    url,
    capa,
    preco,
    estrelas: parseInt(estrelas),
    curtidas: 0,
    criadoEm: new Date().toISOString()
  };

  try {
    await addDoc(collection(db, `livros-${categoria}`), livro);
    alert("✅ Livro adicionado com sucesso!");
    document.getElementById("uploadForm").reset();
  } catch (error) {
    alert("❌ Erro ao adicionar livro: " + error.message);
  }
});
