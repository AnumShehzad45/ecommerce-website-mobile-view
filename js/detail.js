document.addEventListener("DOMContentLoaded", () => {
  const thumbs = [10, 11, 12, 15, 10, 16].map((id) => PRODUCTS.find((item) => item.id === id));
  const main = document.querySelector("#detail-main-img");
  document.querySelector("#detail-thumbs").innerHTML = thumbs.map((item, index) => `
    <button class="${index === 0 ? "active" : ""}" type="button" data-img="${item.image}"><img src="${item.image}" alt="${item.name}" /></button>
  `).join("");
  document.querySelector("#detail-thumbs").addEventListener("click", (event) => {
    const btn = event.target.closest("button");
    if (!btn) return;
    main.src = btn.dataset.img;
    document.querySelectorAll("#detail-thumbs button").forEach((node) => node.classList.remove("active"));
    btn.classList.add("active");
  });

  document.querySelector("#you-may-like").innerHTML = PRODUCTS.slice(12, 17).map((item) => `
    <a class="mini-item" href="detail.html"><img src="${item.image}" alt="${item.name}" /><span>${item.name}<small>$7.00 - $99.50</small></span></a>
  `).join("");

  document.querySelector("#related-products").innerHTML = PRODUCTS.slice(13, 19).map((item) => `
    <article><img src="${item.image}" alt="${item.name}" /><h3>Xiaomi Redmi 8 Original</h3><p>$32.00-$40.00</p></article>
  `).join("");
});
