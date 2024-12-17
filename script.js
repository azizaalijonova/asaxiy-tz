// Ensure modal is hidden on page reload
window.addEventListener("load", () => {
  const modal = document.getElementById("customModal");
  modal.style.display = "none";
});

// Elements
const purchaseBtn = document.getElementById("purchaseBtn");
const modal = document.getElementById("customModal");
const closeModal = document.getElementById("closeModal");

purchaseBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Bu alert yordamida qanday qilib xabar chiqarish mumkinligi
// bu ishlashi uchun button ga onclick="showMessage()" yozilishi kerak bo'ladi
// User-friendly bo'lgani uchun modal ni tanladim

// function showMessage() {
//   alert("Thank you for your purchase!");
// }
