document.addEventListener("DOMContentLoaded", () => {
  const deals = PRODUCTS.slice(7, 13);
  document.querySelector("#deals-row").innerHTML = deals.map((item, index) => `
    <article>
      <img src="${item.image}" alt="${item.name}" />
      <p>${["Smart watches", "Laptops", "GoPro cameras", "Headphones", "Canon cameras", "Smartphones"][index]}</p>
      <span>-${[25, 15, 40, 25, 25, 30][index]}%</span>
    </article>
  `).join("");

  const strip = (items) => items.map((item) => `
    <article>
      <div><h3>${item.name.split(",")[0]}</h3><p>From<br />USD ${Math.round(item.price)}</p></div>
      <img src="${item.image}" alt="${item.name}" />
    </article>
  `).join("");

  document.querySelector("#home-items").innerHTML = strip([20, 21, 18, 19, 8, 16, 17, 5].map((id) => PRODUCTS.find((item) => item.id === id)));
  document.querySelector("#gadget-items").innerHTML = strip(PRODUCTS.slice(7, 9).concat(PRODUCTS.slice(4, 6), PRODUCTS.slice(15, 17), PRODUCTS.slice(6, 8), PRODUCTS.slice(1, 3)));
  document.querySelector("#recommended-grid").innerHTML = PRODUCTS.slice(10, 20).map((item) => `
    <article class="recommend-card">
      <img src="${item.image}" alt="${item.name}" />
      <strong>${money(item.price)}</strong>
      <p>${item.name}</p>
    </article>
  `).join("");
});
