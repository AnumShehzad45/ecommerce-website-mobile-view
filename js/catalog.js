document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#catalog-grid");
  if (grid) grid.innerHTML = PRODUCTS.slice(0, 9).map(productCard).join("");

  const list = document.querySelector("#catalog-list");
  if (list) {
    list.innerHTML = PRODUCTS.slice(0, 6).map((product) => `
      <article class="list-card">
        <a class="list-img" href="detail.html"><img src="${product.image}" alt="${product.name}" /></a>
        <div class="list-info">
          <a class="list-title" href="detail.html">${product.name}</a>
          <div class="list-price">${money(product.id === 1 ? 998 : product.price)} ${product.oldPrice ? `<del>${money(product.oldPrice)}</del>` : ""}</div>
          <div class="rating"><span class="stars">★★★★★</span> ${product.rating} <span>· ${product.orders} orders</span> <strong>· Free Shipping</strong></div>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
          <a href="detail.html">View details</a>
        </div>
        <button class="wish" type="button">♡</button>
      </article>
    `).join("");
  }
});
