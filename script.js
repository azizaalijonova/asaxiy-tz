// Ensure modal is hidden on page reload
window.addEventListener("load", () => {
  const modal = document.getElementById("customModal");
  modal.style.display = "none";
});

// Elements
const purchaseBtn = document.getElementById("purchaseBtn");
const modal = document.getElementById("customModal");
const closeModal = document.getElementById("closeModal");

// Show modal when button is clicked
purchaseBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal when close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if user clicks outside modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Bu alert yordamida qanday qilib xabar chiqarish mumkinligi
// bu ishlashi uchun button ga onclick="showMessage()" yozilishi kerak bo'ladi

// function showMessage() {
//   alert("Thank you for your purchase!");
// }
