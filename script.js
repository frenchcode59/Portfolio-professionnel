document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close");
  
    // Ouvrir une modale
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const modalId = card.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        if (modal) {
          modal.style.display = "flex";
        }
      });
    });
  
    // Fermer une modale
    closeButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const modal = btn.closest(".modal");
        if (modal) {
          modal.style.display = "none";
        }
      });
    });
  
    // Fermer la modale en cliquant en dehors
    modals.forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.style.display = "none";
        }
      });
    });
  });
  