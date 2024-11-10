// Cache les éléments utilisés plusieurs fois
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const boxes = document.querySelectorAll('.serv_img');
const text = document.querySelectorAll('.serv_text');
const listItems = document.querySelectorAll('.list');
const projectBoxes = document.querySelectorAll('.project-box');
const redirectButtons = document.querySelectorAll('.redirectBtn');

// Gestionnaire pour le menu burger
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('appear');
  console.log('clique');
});

// Fonction pour l'animation des boîtes dans la section Service
function animateBoxes() {
  // Vérifie les éléments visibles et active/désactive les classes "visible"
  const elementsInView = elements => {
    elements.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 100);
      } else if (rect.bottom > window.innerHeight) {
        el.classList.remove('visible');
      }
    });
  };

  elementsInView(text);
  elementsInView(boxes);
}

// Appliquer l'animation au scroll et au chargement
window.addEventListener('scroll', animateBoxes);
window.addEventListener('load', animateBoxes);

// Script pour la section Projet (filtrage)
document.addEventListener('click', event => {
  const target = event.target.closest('.project-filter li');
  if (target) {
    target.classList.add('project-filter-active');
    Array.from(target.parentElement.children).forEach(sibling => {
      if (sibling !== target) {
        sibling.classList.remove('project-filter-active');
      }
    });

    const filterValue = target.getAttribute('data-filter');
    projectBoxes.forEach(box => {
      box.style.display =
        filterValue === 'all' || box.classList.contains(filterValue) ? 'block' : 'none';
    });
  }
});

// Fonction pour rediriger lors du clic sur un bouton
redirectButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = `${button.id}.html`;
  });
});
