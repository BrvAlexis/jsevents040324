 //fonctionnalité 1 1-bis
 
 // Sélectionner l'élément du footer par sa classe
 const footerElement = document.querySelector("footer.text-muted");

 // Ajout d'un écouteur d'événement click sur le footer
footerElement.addEventListener('click', afficherMessage);


 // Variable compteur initialisée à 1
let compteurClic = 1;

 // Fonction à exécuter lors du clic sur le footer
function afficherMessage() {
    console.log(`clic numéro ${compteurClic}`);
    // Incrémente le compteur à chaque clic
    compteurClic++;
}


//fonctionnalité 2

// Récupération de l'élément du bouton "Hamburger Menu"
const hamburgerButton = document.querySelector('.navbar-toggler');

// Récupération de l'élément de la navbar
const navbarHeader = document.getElementById('navbarHeader');

// Ajout d'un écouteur d'événement click sur le bouton "Hamburger Menu"
hamburgerButton.addEventListener('click', function() {
    // Toggle la classe collapse sur l'élément de la navbar
    navbarHeader.classList.toggle('collapse');
});

//fonctionnalité 3

// Récupération de l'élément du bouton "Edit" de la première card
const editButtonFirstCard = document.querySelector('.col-md-4:first-child .btn-outline-secondary');

// Récupération de l'élément de la première card
const firstCard = document.querySelector('.col-md-4:first-child .card-text');

// Ajout d'un écouteur d'événement click sur le bouton "Edit" de la première card
editButtonFirstCard.addEventListener('click', function() {
    // Changer la couleur du texte en rouge
    firstCard.style.color = 'red';
});

//fonctionnalité 4

// Récupération de l'élément du bouton "Edit" de la deuxième card
const editButtonSecondCard = document.querySelector('.col-md-4:nth-child(2) .btn-outline-secondary');

// Récupération de l'élément de la deuxième card
const secondCard = document.querySelector('.col-md-4:nth-child(2) .card-text');

// Ajout d'un écouteur d'événement click sur le bouton "Edit" de la deuxième card
editButtonSecondCard.addEventListener('click', function() {
    // Toggle la couleur du texte entre vert et sa couleur initiale
    if (secondCard.style.color === 'green') {
        secondCard.style.color = '';
    } else {
        secondCard.style.color = 'green';
    }
});

//fonctionnalité 5

 // Récupération du lien vers le fichier CSS Bootstrap
 const bootstrapLink = document.querySelector('link[href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]');

 // Ajout d'un écouteur d'événement double-clic sur la navbar
 document.querySelector('header').addEventListener('dblclick', function() {
     // Toggle la désactivation du lien pour afficher ou cacher le Bootstrap avec opérateur de négation (!)
     bootstrapLink.disabled = !bootstrapLink.disabled;
 });

// fonctionnalité 6
 
   // Boucle pour ajouter l'événement à chaque card
   for (let i = 1; i <= 6; i++) {
    // Récupération de l'élément du bouton "View" de la card
    const viewButton = document.querySelector(`.col-md-4:nth-child(${i}) .btn-success`);

    // Récupération de l'élément de la card (contenant l'image et le texte)
    const card = document.querySelector(`.col-md-4:nth-child(${i})`);

    // Récupération de l'élément de l'image
    const cardImage = document.querySelector(`.col-md-4:nth-child(${i}) img`);

    // Récupération de l'élément du texte
    const cardText = document.querySelector(`.col-md-4:nth-child(${i}) .card-text`);

    // Ajout d'un écouteur d'événement hover sur le bouton "View" de la card
    viewButton.addEventListener('mouseover', function() {
        // Appliquer les changements de style pour réduire la card
        cardImage.style.width = '20%';
        cardText.style.display = 'none';
    });

    // Ajout d'un écouteur d'événement hover lorsque la souris quitte le bouton "View"
    viewButton.addEventListener('mouseout', function() {
        // Rétablir les styles normaux de la card
        cardImage.style.width = '';
        cardText.style.display = '';
    });
}


//fonctionnalité 7

  // Récupération de l'élément du bouton "==> " avec le sélecteur fourni
  const moveButton = document.querySelector("a.btn.btn-secondary.my-2");

  // Récupération du parent des cards avec le sélecteur spécifique
  const cardsContainer = document.querySelector(".album .row");

  // Ajout d'un écouteur d'événement click sur le bouton "==> "
  moveButton.addEventListener('click', function() {
      // Récupération de la dernière card
      const lastCard = cardsContainer.lastElementChild;

      // Déplacement de la dernière card en premier
      cardsContainer.insertBefore(lastCard, cardsContainer.firstElementChild);
  });
