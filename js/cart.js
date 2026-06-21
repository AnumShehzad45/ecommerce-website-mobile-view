function renderCart() {
  const cartItems = document.querySelector("#cart-items");
  const cart = getCart();
  document.querySelector("#cart-total-count").textContent = cart.reduce((sum, item) => sum + item.qty, 0);

  if (!cart.length) {
    cartItems.innerHTML = `<div class="empty-cart"><h2>Your cart is empty</h2><p>Add products from the shop page.</p></div>`;
  } else {
    cartItems.innerHTML = cart.map((cartItem) => {
      const product = PRODUCTS.find((item) => item.id === cartItem.id) || PRODUCTS[0];
      const price = cartItem.cartPrice || product.price;
      return `
        <article class="cart-row" data-id="${cartItem.id}">
          <img src="${product.image}" alt="${product.name}" />
          <div class="cart-row-info">
            <h3>${cartItem.id === 10 ? "T-shirts with multiple colors, for men and lady" : product.name}</h3>
            <p>Size: medium, Color: blue, Material: Plastic<br />Seller: ${product.seller}</p>
            <button class="remove-item" type="button">Remove</button>
            <button class="save-item" type="button">Save for later</button>
          </div>
          <div class="cart-row-side">
            <strong>${money(price)}</strong>
            <select class="qty-select">${Array.from({ length: 10 }, (_, i) => `<option ${cartItem.qty === i + 1 ? "selected" : ""}>${i + 1}</option>`).join("")}</select>
          </div>
        </article>`;
    }).join("");
  }

  const subtotal = cart.reduce((sum, item) => sum + item.qty * (item.cartPrice || PRODUCTS.find((product) => product.id === item.id)?.price || 0), 0);
  const discount = cart.length ? 60 : 0;
  const tax = cart.length ? 14 : 0;
  document.querySelector("#subtotal").textContent = money(subtotal);
  document.querySelector("#discount").textContent = `-${money(discount)}`;
  document.querySelector("#tax").textContent = `+${money(tax)}`;
  document.querySelector("#grand-total").textContent = money(Math.max(subtotal - discount + tax, 0));
  updateCartBadge();
}

document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  document.querySelector("#cart-items").addEventListener("change", (event) => {
    if (!event.target.classList.contains("qty-select")) return;
    const id = Number(event.target.closest(".cart-row").dataset.id);
    const cart = getCart().map((item) => item.id === id ? { ...item, qty: Number(event.target.value) } : item);
    saveCart(cart);
    renderCart();
  });
  document.querySelector("#cart-items").addEventListener("click", (event) => {
    const row = event.target.closest(".cart-row");
    if (!row) return;
    if (event.target.classList.contains("remove-item")) {
      saveCart(getCart().filter((item) => item.id !== Number(row.dataset.id)));
      renderCart();
    }
  });
  document.querySelector("#remove-all").addEventListener("click", () => {
    saveCart([]);
    renderCart();
  });
  document.querySelector("#saved-products").innerHTML = PRODUCTS.slice(3, 7).map((item) => `
    <article class="saved-product">
      <img src="${item.image}" alt="${item.name}" />
      <strong>${money(item.price)}</strong>
      <p>${item.name}</p>
      <button class="btn ghost" data-add-cart="${item.id}" data-label="Move to cart" type="button">▾ Move to cart</button>
    </article>
  `).join("");
});
