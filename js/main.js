const money = (value) => `$${Number(value).toFixed(2)}`;

function getCart() {
  const saved = localStorage.getItem("brand_cart");
  if (saved) return JSON.parse(saved);
  localStorage.setItem("brand_cart", JSON.stringify(CART_SEED));
  return [...CART_SEED];
}

function saveCart(cart) {
  localStorage.setItem("brand_cart", JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(productId, qty = 1) {
  const cart = getCart();
  const product = PRODUCTS.find((item) => item.id === Number(productId));
  const existing = cart.find((item) => item.id === Number(productId));
  if (existing) existing.qty += qty;
  else cart.push({ id: Number(productId), qty, cartPrice: product ? product.price : 0 });
  saveCart(cart);
}

function updateCartBadge() {
  const count = getCart().reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll("[data-cart-count]").forEach((node) => {
    node.textContent = count;
  });
}

function renderHeader() {
  const header = document.querySelector("#site-header");
  if (!header) return;
  const simple = header.dataset.simpleHeader === "true";
  header.innerHTML = `
    <header class="site-header">
      <div class="topbar container">
        <button class="mobile-menu-toggle" type="button" data-menu-open aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
        <a class="brand" href="index.html"><img src="assets/images/brand/logo-colored.png" alt="Brand" /></a>
        ${simple ? "" : `
        <form class="searchbar">
          <input type="search" placeholder="Search" />
          <select><option>All category</option><option>Electronics</option><option>Clothing</option></select>
          <button type="button">Search</button>
        </form>`}
        <nav class="quick-nav">
          <a href="#">Profile</a>
          <a href="#">Message</a>
          <a href="#">Orders</a>
          <a class="cart-link" href="cart.html">My cart <span data-cart-count>0</span></a>
        </nav>
      </div>
      ${simple ? "" : `
      <div class="navline">
        <div class="container navline-inner">
          <nav class="main-nav">
            <a href="grid-view.html">☰ All category</a>
            <a href="grid-view.html">Hot offers</a>
            <a href="grid-view.html">Gift boxes</a>
            <a href="grid-view.html">Projects</a>
            <a href="grid-view.html">Menu item</a>
            <a href="#">Help⌄</a>
          </nav>
          <div class="locale-nav"><span>English, USD⌄</span><span>Ship to <img src="assets/images/flags/DE@2x.png" alt="Germany" />⌄</span></div>
        </div>
      </div>`}
    </header>`;
  renderMobileMenu(header);
  updateCartBadge();
}

function renderMobileMenu(header) {
  header.insertAdjacentHTML("beforeend", `
    <div class="mobile-menu-overlay" data-menu-close></div>
    <aside class="mobile-menu-panel" aria-hidden="true">
      <div class="mobile-menu-user">
        <button class="mobile-menu-close" type="button" data-menu-close aria-label="Close menu">&times;</button>
        <div class="mobile-avatar"></div>
        <div class="mobile-auth"><a href="#">Sign in</a><span>|</span><a href="#">Register</a></div>
      </div>
      <nav class="mobile-menu-list">
        <a href="index.html"><span>⌂</span>Home</a>
        <a href="grid-view.html"><span>☷</span>Categories</a>
        <a href="grid-view.html"><span>♡</span>Favorites</a>
        <a href="cart.html"><span>▤</span>My orders</a>
      </nav>
      <nav class="mobile-menu-list mobile-menu-separated">
        <a href="#"><span>◎</span>English | USD</a>
        <a href="#"><span>♧</span>Contact us</a>
        <a href="#"><span>▦</span>About</a>
      </nav>
      <nav class="mobile-menu-list mobile-menu-separated mobile-menu-plain">
        <a href="#">User agreement</a>
        <a href="#">Partnership</a>
        <a href="#">Privacy policy</a>
      </nav>
    </aside>`);
}

function openMobileMenu() {
  document.body.classList.add("mobile-menu-open");
  document.querySelector(".mobile-menu-panel")?.setAttribute("aria-hidden", "false");
}

function closeMobileMenu() {
  document.body.classList.remove("mobile-menu-open");
  document.querySelector(".mobile-menu-panel")?.setAttribute("aria-hidden", "true");
}

function renderNewsletter() {
  const el = document.querySelector("#newsletter");
  if (!el) return;
  el.innerHTML = `
    <section class="newsletter">
      <h2>Subscribe on our newsletter</h2>
      <p>Get daily news on upcoming offers from many suppliers all over the world</p>
      <form><input type="email" placeholder="Email" /><button type="button">Subscribe</button></form>
    </section>`;
}

function renderFooter() {
  const footer = document.querySelector("#site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container footer-main">
        <div class="footer-brand">
          <a class="brand" href="index.html"><img src="assets/images/brand/logo-colored.png" alt="Brand" /></a>
          <p>Best information about the company gies here but now lorem ipsum is</p>
          <div class="socials"><span>f</span><span>t</span><span>in</span><span>ig</span><span>yt</span></div>
        </div>
        <div><h3>About</h3><a>About Us</a><a>Find store</a><a>Categories</a><a>Blogs</a></div>
        <div><h3>Partnership</h3><a>About Us</a><a>Find store</a><a>Categories</a><a>Blogs</a></div>
        <div><h3>Information</h3><a>Help Center</a><a>Money Refund</a><a>Shipping</a><a>Contact us</a></div>
        <div><h3>For users</h3><a>Login</a><a>Register</a><a>Settings</a><a>My Orders</a></div>
        <div class="app-buttons"><h3>Get app</h3><img src="assets/images/brand/app-store.png" alt="Download on the App Store" /><img src="assets/images/brand/google-play.png" alt="Get it on Google Play" /></div>
      </div>
      <div class="footer-bottom"><div class="container"><span>© 2023 Ecommerce.</span><span class="footer-lang"><img src="assets/images/flags/US@2x.png" alt="United States" /> English⌃</span></div></div>
    </footer>`;
}

function renderFilters() {
  const sidebars = document.querySelectorAll("[data-filters]");
  sidebars.forEach((sidebar) => {
    const rich = sidebar.classList.contains("rich");
    sidebar.innerHTML = `
      <div class="filter-group"><h3>Category</h3><a>Mobile accessory</a><a>Electronics</a><a>Smartphones</a><a>Modern tech</a><button>See all</button></div>
      <div class="filter-group"><h3>Brands</h3>${["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"].map((name, index) => `<label><input type="checkbox" ${!rich && [0, 1, 3].includes(index) ? "checked" : ""}/> ${name}</label>`).join("")}<button>See all</button></div>
      <div class="filter-group"><h3>Features</h3>${["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"].map((name, index) => `<label><input type="checkbox" ${!rich && index === 0 ? "checked" : ""}/> ${name}</label>`).join("")}<button>See all</button></div>
      ${rich ? `<div class="filter-group"><h3>Price range</h3><div class="range-line"></div><div class="range-inputs"><input placeholder="0"/><input placeholder="999999"/></div><button class="apply">Apply</button></div>` : ""}
      <div class="filter-group"><h3>Condition</h3>${rich ? ["Any", "Refurbished", "Brand new", "Old items"].map((name, index) => `<label><input type="radio" name="condition" ${index === 0 ? "checked" : ""}/> ${name}</label>`).join("") : ""}</div>
      <div class="filter-group"><h3>Ratings</h3>${rich ? [5, 4, 3, 2].map((n) => `<label><input type="checkbox"/> <span class="stars">${"★★★★★".slice(0, n)}<span class="muted">${"★★★★★".slice(n)}</span></span></label>`).join("") : ""}</div>
      <div class="filter-group"><h3>Manufacturer</h3></div>`;
  });
}

function productCard(product) {
  return `
    <article class="product-card">
      <a class="product-img" href="detail.html"><img src="${product.image}" alt="${product.name}" /></a>
      <div class="product-body">
        <div class="product-price">${money(product.price)} <del>${money(product.oldPrice)}</del></div>
        <div class="rating"><span class="stars">★★★★★</span> ${product.rating}</div>
        <a class="product-name" href="detail.html">${product.name}</a>
        <button class="wish" type="button" title="Save for later">♡</button>
      </div>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderNewsletter();
  renderFooter();
  renderFilters();
  document.body.addEventListener("click", (event) => {
    if (event.target.closest("[data-menu-open]")) {
      openMobileMenu();
      return;
    }
    if (event.target.closest("[data-menu-close]")) {
      closeMobileMenu();
      return;
    }
    const button = event.target.closest("[data-add-cart]");
    if (!button) return;
    const originalLabel = button.dataset.label || button.textContent;
    addToCart(button.dataset.addCart);
    button.textContent = "Added";
    setTimeout(() => { button.textContent = originalLabel; }, 900);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });
});
