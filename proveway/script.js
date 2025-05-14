const radios = document.querySelectorAll('input[type="radio"][name="unit"]');
const totalPrice = document.getElementById("totalPrice");
const addToCartBtn = document.getElementById("addCart");

function updatePrice(radio) {
  totalPrice.textContent = `$${parseFloat(radio.value).toFixed(2)} USD`;
  document
    .querySelectorAll(".card")
    .forEach((card) => card.classList.remove("selected"));
  radio.closest(".card").classList.add("selected");
}

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    updatePrice(radio);
  });
});

addToCartBtn.addEventListener("click", () => {
  const selected = document.querySelector('input[name="unit"]:checked');
  const units = selected.getAttribute("data-units");
  const amount = selected.value;
  alert(`✅ Added ${units} unit(s) to cart for $${amount} USD`);
  addToCartBtn.textContent = "✔ Added!";
  addToCartBtn.style.backgroundColor = "#16a085";
});
