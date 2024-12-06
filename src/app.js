// Import des composants
import Navbar from './components/navbar.js';
import Home from './components/Home.js';
import Recipes from './components/Recipes.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';

// Sélectionner l'élément racine où le contenu sera injecté
const root = document.getElementById('app');

// Fonction pour afficher une page
function renderPage(content) {
  root.innerHTML = `
    <div class="min-h-screen pb-16">
      ${Navbar()}  <!-- Inclusion de la barre de navigation -->
      ${content}   <!-- Contenu dynamique -->
      ${Footer()}  <!-- Inclusion du footer -->
    </div>
  `;
}

// Écouteurs d'événements pour gérer le changement de page au clic sur les liens
document.addEventListener('click', (event) => {
  // Vérification du lien cliqué et affichage du contenu correspondant
  if (event.target.id === 'home-link') {
    renderPage(Home());
  } else if (event.target.id === 'recipes-link') {
    renderPage(Recipes());
  } else if (event.target.id === 'about-link') {
    renderPage(About());
  } else if (event.target.id === 'contact-link') {
    renderPage(Contact());
  }
});

// Chargement initial de la page d'accueil
renderPage(Home());
