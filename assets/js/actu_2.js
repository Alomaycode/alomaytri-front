class NewsShowcase {
      constructor() {
            this.heroContainer = document.getElementById('heroContainer');
            this.contentDetails = document.getElementById('contentDetails');
            this.closeBtn = document.getElementById('closeBtn');
            this.isExpanded = false;

            this.init();
      }

      init() {
            this.heroContainer.addEventListener('click', () => this.toggleContent());
            this.closeBtn.addEventListener('click', (e) => {
                  e.stopPropagation();
                  this.toggleContent();
            });
      }

      toggleContent() {
            this.isExpanded = !this.isExpanded;

            if (this.isExpanded) {
                  this.expand();
            } else {
                  this.collapse();
            }
      }

      expand() {
            // 1. On lance l'animation du hero
            this.heroContainer.classList.add('shrinking');

            setTimeout(() => {
                  this.heroContainer.classList.add('minimized');
                  this.contentDetails.classList.add('active');
                  this.closeBtn.classList.add('visible');

                  // 2. Scroll avec un décalage (Offset)
                  setTimeout(() => {
                        // On calcule la position de l'élément par rapport au haut de la page
                        const elementPosition = this.contentDetails.getBoundingClientRect().top + window.pageYOffset;

                        // On définit l'espace que l'on veut laisser en haut (ex: 80 pixels)
                        const offset = 80;

                        window.scrollTo({
                              top: elementPosition - offset,
                              behavior: 'smooth'
                        });
                  }, 150); // Petit délai pour laisser le DOM se mettre à jour
            }, 800);
      }

      collapse() {
            this.contentDetails.classList.remove('active');
            this.closeBtn.classList.remove('visible');

            // Show hero again
            this.heroContainer.classList.remove('minimized');

            // Remove shrinking class after a brief delay
            setTimeout(() => {
                  this.heroContainer.classList.remove('shrinking');
            }, 50);

            // Scroll back to top
            this.heroContainer.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
            });
      }
}

// Initialiser l'application
document.addEventListener('DOMContentLoaded', () => {
      new NewsShowcase();
});