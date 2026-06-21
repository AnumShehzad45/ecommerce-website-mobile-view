const PRODUCTS = [
  { id: 1, name: "GoPro HERO6 4K Action Camera - Black", price: 99.5, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/phone-red.png", category: "Mobile accessory", seller: "Artel Market" },
  { id: 2, name: "GoPro HERO6 4K Action Camera - Black", price: 99.5, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/phone-black.png", category: "Mobile accessory", seller: "Best factory LLC" },
  { id: 3, name: "Canon Cmera EOS 2000, Black 10x zoom", price: 998, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/phone-black.png", category: "Mobile accessory", seller: "Guangzhou Trading" },
  { id: 4, name: "GoPro HERO6 4K Action Camera - Black", price: 99.5, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/tablet.png", category: "Electronics", seller: "Artel Market" },
  { id: 5, name: "GoPro HERO6 4K Action Camera - Black", price: 99.5, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/camera.png", category: "Electronics", seller: "Artel Market" },
  { id: 6, name: "GoPro HERO6 4K Action Camera - Black", price: 99.5, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/phone-black.png", category: "Mobile accessory", seller: "Best factory LLC" },
  { id: 7, name: "GoPro HERO6 4K Action Camera - Black", price: 99.5, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/laptop.png", category: "Electronics", seller: "Artel Market" },
  { id: 8, name: "GoPro HERO6 4K Action Camera - Black", price: 99.5, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/watch.png", category: "Mobile accessory", seller: "Best factory LLC" },
  { id: 9, name: "GoPro HERO6 4K Action Camera - Black", price: 99.5, oldPrice: 1128, rating: 7.5, orders: 154, image: "assets/images/products/phone-red.png", category: "Mobile accessory", seller: "Artel Market" },
  { id: 10, name: "T-shirts with multiple colors, for men", price: 10.3, oldPrice: 18, rating: 8.5, orders: 96, image: "assets/images/products/shirt-blue.png", category: "Clothing", seller: "Artel Market" },
  { id: 11, name: "Jeans shorts for men blue color", price: 10.3, oldPrice: 22, rating: 8.2, orders: 61, image: "assets/images/products/jacket.png", category: "Clothing", seller: "Best factory LLC" },
  { id: 12, name: "Brown winter coat medium size", price: 12.5, oldPrice: 29, rating: 8.7, orders: 73, image: "assets/images/products/blazer.png", category: "Clothing", seller: "Artel Market" },
  { id: 13, name: "Jeans bag for travel for men", price: 34, oldPrice: 49, rating: 8.1, orders: 83, image: "assets/images/products/wallet.png", category: "Bags", seller: "Artel Market" },
  { id: 14, name: "Leather wallet", price: 99, oldPrice: 132, rating: 7.9, orders: 42, image: "assets/images/products/bag.png", category: "Bags", seller: "Best factory LLC" },
  { id: 15, name: "Canon camera black, 100x zoom", price: 9.99, oldPrice: 29, rating: 7.8, orders: 23, image: "assets/images/products/shorts.png", category: "Clothing", seller: "Best factory LLC" },
  { id: 16, name: "Headset for gaming with mic", price: 8.99, oldPrice: 18, rating: 7.4, orders: 81, image: "assets/images/products/headphones.png", category: "Electronics", seller: "Artel Market" },
  { id: 17, name: "Smartwatch silver color modern", price: 10.3, oldPrice: 30, rating: 8.9, orders: 65, image: "assets/images/products/watch.png", category: "Mobile accessory", seller: "Best factory LLC" },
  { id: 18, name: "Blue wallet for men leather material", price: 10.3, oldPrice: 39, rating: 8.6, orders: 41, image: "assets/images/products/wallet.png", category: "Home", seller: "Artel Market" },
  { id: 19, name: "Jeans bag for travel for men", price: 80.95, oldPrice: 120, rating: 8.1, orders: 38, image: "assets/images/products/kettle.png", category: "Home", seller: "Best factory LLC" },
  { id: 20, name: "Soft chairs", price: 19, oldPrice: 26, rating: 8, orders: 51, image: "assets/images/products/chair.png", category: "Home", seller: "Artel Market" },
  { id: 21, name: "Kitchen dishes", price: 19, oldPrice: 27, rating: 8, orders: 25, image: "assets/images/products/lamp.png", category: "Home", seller: "Artel Market" }
];

const CART_SEED = [
  { id: 10, qty: 9, cartPrice: 78.99 },
  { id: 14, qty: 3, cartPrice: 39 },
  { id: 21, qty: 1, cartPrice: 170.5 }
];
