import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import * as THREE from "three";
import { createPhone, disposePhone } from "./three/createPhone.js";

gsap.registerPlugin(ScrollTrigger);

const API = "http://localhost:8080";
const CART_ID = "nova-demo-guest";
const PLACEHOLDER = "/products/placeholder.svg";
const categoryImage = {
  Smartphone: "/products/smartphone.svg",
  Audio: "/products/audio.svg",
  Smartwatch: "/products/smartwatch.svg",
  Laptop: "/products/laptop.svg",
  Aksesoris: "/products/accessories.svg",
};
const TYPE_BY_SLUG = {
  "aura-phone-12": "phone",
  "aura-phone-12-sage": "phone",
  "aura-phone-mini": "phone",
  "pulse-watch-4": "watch",
  "pulse-band": "watch",
  "arc-buds-pro": "earbuds",
  "arc-buds-air": "earbuds",
  "framebook-air-14": "laptop",
  "framebook-stand": "laptop",
  "snap-charger-65": "charger",
  "snap-charger-duo": "charger",
  "aura-phone-case": "case",
  "studio-speaker-mini": "speaker",
  "studio-speaker-bar": "speaker",
  "loop-powerbank": "powerbank",
  "desk-mat": "deskmat",
};
const typeFor = (product) =>
  product.type || TYPE_BY_SLUG[product.slug] ||
  ({ Smartphone: "phone", Audio: "speaker", Smartwatch: "watch", Laptop: "laptop" }[product.category] || "charger");
const artColor = (product) =>
  product.slug?.includes("sage") ? "#a9b6a0" : product.slug?.includes("clay") ? "#c96f4a" : "#89928c";
const escapeHTML = (value) => String(value ?? "").replace(/[&<>\"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '\"': "&quot;", "'": "&#39;" })[char]);
const rupiah = (value) => new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value || 0);
const qs = (selector) => document.querySelector(selector);

function productSVG(product) {
  const type = typeFor(product);
  const fill = artColor(product);
  const name = escapeHTML(product.name);
  const common = `viewBox="0 0 400 500" role="img" aria-label="${name}" xmlns="http://www.w3.org/2000/svg"`;
  const caption = `<text x="200" y="458" text-anchor="middle" fill="#141414" font-family="monospace" font-size="12" letter-spacing="2">${name.toUpperCase()}</text>`;
  const shapes = {
    phone: `<rect x="112" y="65" width="176" height="330" rx="25" fill="${fill}"/><rect x="132" y="92" width="136" height="260" rx="12" fill="#303632"/><circle cx="157" cy="125" r="18" fill="#1b211e"/><circle cx="205" cy="125" r="18" fill="#1b211e"/><circle cx="157" cy="173" r="18" fill="#1b211e"/><circle cx="157" cy="125" r="8" fill="#ff4a1c"/><path d="M160 315h80" stroke="#ff4a1c" stroke-width="7"/>`,
    earbuds: `<path d="M103 185c0-45 39-82 87-82s87 37 87 82v105c0 18-15 33-33 33h-8V203c0-25-20-45-45-45s-45 20-45 45v120h-10c-18 0-33-15-33-33z" fill="${fill}"/><path d="M112 199c0-34 27-61 61-61s61 27 61 61" fill="none" stroke="#e8e2d6" stroke-width="16"/><circle cx="157" cy="203" r="8" fill="#ff4a1c"/>`,
    watch: `<path d="M150 60h100l24 100H126zM126 340h148l-24 100H150z" fill="${fill}"/><rect x="110" y="145" width="180" height="215" rx="30" fill="#414943"/><rect x="137" y="175" width="126" height="155" rx="12" fill="#202622"/><circle cx="200" cy="251" r="32" fill="none" stroke="#ff4a1c" stroke-width="8"/><circle cx="303" cy="205" r="10" fill="#89928c"/>`,
    laptop: `<path d="M90 120h220v190H90z" fill="${fill}"/><path d="M110 140h180v140H110z" fill="#303632"/><path d="M45 335h310l-40 48H85z" fill="#89928c"/><path d="M118 330h164M155 350h90" stroke="#141414" stroke-width="6"/><circle cx="200" cy="346" r="5" fill="#ff4a1c"/>`,
    charger: `<rect x="118" y="105" width="164" height="180" rx="18" fill="${fill}"/><path d="M155 105V72m90 33V72" stroke="#141414" stroke-width="13"/><path d="M200 285c0 80 100 35 100 100 0 30-27 43-61 43H118" fill="none" stroke="#141414" stroke-width="9"/><circle cx="139" cy="210" r="8" fill="#ff4a1c"/>`,
    powerbank: `<rect x="85" y="130" width="230" height="220" rx="32" fill="${fill}"/><rect x="150" y="112" width="100" height="22" rx="9" fill="#141414"/><circle cx="135" cy="235" r="8" fill="#ff4a1c"/><circle cx="165" cy="235" r="8" fill="#141414"/><circle cx="195" cy="235" r="8" fill="#141414"/><circle cx="225" cy="235" r="8" fill="#141414"/><rect x="170" y="295" width="60" height="16" rx="6" fill="#303632"/>`,
    speaker: `<path d="M75 190c0-25 20-45 45-45h160c25 0 45 20 45 45v90c0 25-20 45-45 45H120c-25 0-45-20-45-45z" fill="${fill}"/><path d="M95 170c-35 25-35 105 0 130" fill="none" stroke="#141414" stroke-width="9"/><g fill="#141414">${Array.from({ length: 35 }, (_, i) => `<circle cx="${135 + (i % 7) * 22}" cy="${202 + Math.floor(i / 7) * 18}" r="4"/>`).join("")}</g><path d="M160 150c5-28 75-28 80 0" fill="none" stroke="#ff4a1c" stroke-width="7"/>`,
    case: `<rect x="112" y="65" width="176" height="330" rx="25" fill="${fill}" fill-opacity=".52"/><rect x="132" y="92" width="136" height="260" rx="12" fill="none"/><rect x="142" y="104" width="58" height="62" rx="13" fill="#e8e2d6"/><circle cx="160" cy="124" r="9" fill="#141414"/><circle cx="184" cy="124" r="9" fill="#141414"/><path d="M150 345h100" stroke="#ff4a1c" stroke-width="7"/>`,
    deskmat: `<path d="M55 160l245-45 55 190-245 45z" fill="${fill}"/><path d="M75 178l207-38 39 145-207 38z" fill="#a6aea4"/><rect x="220" y="205" width="56" height="76" rx="25" transform="rotate(-13 220 205)" fill="#303632"/><circle cx="248" cy="220" r="5" fill="#ff4a1c"/>`,
  };
  return `<svg class="product-art" ${common}><rect width="400" height="500" fill="#e8e2d6"/>${shapes[type] || shapes.phone}${caption}</svg>`;
}

const fallbackProducts = [
  { id: 1, slug: "aura-phone-12", name: "Aura Phone 12", category: "Smartphone", type: "phone", price: 14999000, oldPrice: 16999000, installment: 624958, rating: 4.9, reviews: 128, badge: "Terlaris", description: "Flagship yang terasa ringan. Kamera Pro 48MP, layar 120Hz, dan satu hari penuh tanpa kompromi.", stock: 7, specs: [{ label: "Layar", value: '6.7\" OLED · 120Hz' }] },
  { id: 2, slug: "pulse-watch-4", name: "Pulse Watch 4", category: "Smartwatch", type: "watch", price: 4799000, installment: 199958, rating: 4.8, reviews: 86, badge: "Baru", description: "Data kesehatan yang jujur, desain yang tidak berisik.", stock: 12, specs: [{ label: "Display", value: '1.9\" AMOLED' }] },
  { id: 3, slug: "arc-buds-pro", name: "Arc Buds Pro", category: "Audio", type: "earbuds", price: 2899000, oldPrice: 3299000, installment: 120792, rating: 4.7, reviews: 214, description: "Noise cancelling adaptif dalam siluet sekecil itu.", stock: 4, specs: [{ label: "ANC", value: "Adaptive ANC" }] },
  { id: 4, slug: "framebook-air-14", name: "Framebook Air 14", category: "Laptop", type: "laptop", price: 18999000, installment: 791625, rating: 4.9, reviews: 52, description: "Tenaga kerja kreatif. Beratnya seperti buku.", stock: 8, specs: [{ label: "Processor", value: "M4 · 10-core" }] },
  { id: 5, slug: "snap-charger-65", name: "Snap Charger 65W", category: "Aksesoris", type: "charger", price: 699000, installment: 29125, rating: 4.6, reviews: 41, description: "Kecil di tas, besar di daya.", stock: 20, specs: [{ label: "Output", value: "65W GaN" }] },
  { id: 6, slug: "aura-phone-case", name: "Aura Case / Clay", category: "Aksesoris", type: "case", price: 549000, installment: 22875, rating: 4.8, reviews: 67, description: "Perlindungan tipis dengan warna yang terasa hidup.", stock: 14, specs: [{ label: "Material", value: "Recycled TPU" }] },
  { id: 7, slug: "studio-speaker-mini", name: "Studio Speaker Mini", category: "Audio", type: "speaker", price: 2199000, oldPrice: 2499000, installment: 91625, rating: 4.7, reviews: 39, description: "Suara penuh dari sudut paling tenang di ruangan.", stock: 9, specs: [{ label: "Audio", value: "360° spatial" }] },
  { id: 8, slug: "loop-powerbank", name: "Loop Powerbank 10K", category: "Aksesoris", type: "powerbank", price: 899000, installment: 37458, rating: 4.5, reviews: 103, description: "Daya cadangan yang selalu siap.", stock: 18, specs: [{ label: "Capacity", value: "10.000 mAh" }] },
  { id: 9, slug: "aura-phone-12-sage", name: "Aura Phone 12 Sage", category: "Smartphone", type: "phone", price: 14999000, installment: 624958, rating: 4.9, reviews: 24, description: "Sage green, karakter yang lebih lembut.", stock: 6, specs: [{ label: "Layar", value: '6.7\" OLED · 120Hz' }] },
  { id: 10, slug: "desk-mat", name: "Desk Mat / Terra", category: "Aksesoris", type: "deskmat", price: 429000, installment: 17875, rating: 4.6, reviews: 28, description: "Permukaan kerja yang bikin fokus terasa mudah.", stock: 15, specs: [{ label: "Surface", value: "Vegan leather" }] },
  { id: 11, slug: "aura-phone-mini", name: "Aura Phone Mini", category: "Smartphone", type: "phone", price: 10999000, oldPrice: 11999000, installment: 458292, rating: 4.7, reviews: 74, badge: "Baru", description: "Kecil di tangan, serius di performa.", stock: 10, specs: [{ label: "Layar", value: '6.1\" OLED' }] },
  { id: 12, slug: "arc-buds-air", name: "Arc Buds Air", category: "Audio", type: "earbuds", price: 1799000, oldPrice: 2099000, installment: 74958, rating: 4.6, reviews: 61, description: "Suara terbuka untuk hari yang bergerak.", stock: 5, specs: [{ label: "Playtime", value: "24 jam" }] },
  { id: 13, slug: "pulse-band", name: "Pulse Band", category: "Smartwatch", type: "watch", price: 1299000, installment: 54125, rating: 4.5, reviews: 33, description: "Ritme harian, dibuat sederhana.", stock: 11, specs: [{ label: "Battery", value: "10 hari" }] },
  { id: 14, slug: "framebook-stand", name: "Framebook Stand", category: "Aksesoris", type: "laptop", price: 799000, installment: 33292, rating: 4.6, reviews: 18, description: "Sudut kerja yang lebih rapi.", stock: 13, specs: [{ label: "Material", value: "Aluminium" }] },
  { id: 15, slug: "snap-charger-duo", name: "Snap Charger Duo", category: "Aksesoris", type: "charger", price: 899000, installment: 37458, rating: 4.7, reviews: 45, description: "Satu charger untuk dua kebiasaan.", stock: 3, specs: [{ label: "Output", value: "65W dual" }] },
  { id: 16, slug: "studio-speaker-bar", name: "Studio Speaker Bar", category: "Audio", type: "speaker", price: 3299000, installment: 137458, rating: 4.8, reviews: 27, description: "Ruang kecil, suara yang penuh.", stock: 7, specs: [{ label: "Audio", value: "Wide stereo" }] },
];
let products = [...fallbackProducts];
let activeCategory = "all";
let cart = { items: [], subtotal: 0, shipping: 0, total: 0, freeLeft: 1000000 };

const imageFor = (product) => categoryImage[product.category] || PLACEHOLDER;
const api = async (path, options = {}) => {
  try {
    const response = await fetch(API + path, { ...options, headers: { "Content-Type": "application/json", "X-Cart-ID": CART_ID, ...options.headers } });
    if (!response.ok) throw new Error("API request failed");
    return await response.json();
  } catch {
    return null;
  }
};

function shell() {
  qs("#app").innerHTML = `
    <div class="topline"><div class="marquee">Gratis ongkir untuk pembelian di atas Rp1.000.000 <span>✳</span> Pilihan gadget yang dibuat untuk hidup nyata <span>✳</span> Garansi resmi 1 tahun <span>✳</span></div></div>
    <nav class="container"><a class="logo" href="#top">NOVA <em>GEAR</em></a><div class="navlinks"><a href="#catalog">Katalog</a><a href="#story">Cerita kami</a><a href="#journal">Jurnal</a></div><button class="cart-button" id="open-cart">BAG <span class="cart-count">0</span></button></nav>
    <main id="top">
      <section class="hero container"><div class="hero-copy"><div class="eyebrow">Teknologi pilihan / 2024</div><h1 class="hero__title"><span class="line">Gadget terbaik</span><span class="line">untuk hari yang</span><span class="line line--serif">lebih baik.</span></h1><p class="hero-desc">Perangkat yang dipilih dengan sengaja. Lebih sedikit noise, lebih banyak hal yang ingin kamu lakukan.</p><div class="hero-actions"><a href="#catalog" class="cta">Belanja koleksi <span class="arrow">↘</span></a><a href="#story" class="text-cta">Kenali lebih dekat <span>↘</span></a></div><div class="hero-stats"><span>4.8 rating</span><span>12rb+ terjual</span><span>garansi 1 tahun</span></div></div><div class="hero-stage"><div class="hero__canvas" id="hero-canvas-wrap"><canvas id="hero-canvas" aria-label="Model 3D Aura Phone 12"></canvas><div class="fallback-phone" aria-hidden="true"></div></div><div class="hero__caption">AURA PHONE 12<br>MODEL / TITANIUM</div></div></section>
      <section class="dark-band" id="story"><div class="container"><div class="section-head"><h2 class="section-title">Dibuat untuk<br><em>berarti.</em></h2><span class="mono">02 / Tiga cara melihatnya</span></div><div class="story"><div class="story__grid"><div class="story__visual"><canvas class="story__canvas" id="story-canvas" aria-label="Cerita interaktif Aura Phone 12"></canvas><div class="story-fallback" aria-hidden="true"><span>01</span><span>02</span><span>03</span></div></div><div class="story__steps"><button class="story__step active" data-step="0"><span>01</span><strong>Kamera Pro</strong></button><button class="story__step" data-step="1"><span>02</span><strong>Layar OLED</strong></button><button class="story__step" data-step="2"><span>03</span><strong>Baterai seharian</strong></button></div></div><div class="story-copy"><div class="mono" id="story-label">01 / 03 — Kamera</div><h3 id="story-title">Lihat yang<br>terlewat.</h3><p id="story-text">Sensor Pro menangkap detail yang biasanya hilang. Bukan untuk membuatmu jadi fotografer — untuk membuat momen biasa terasa cukup.</p><ul class="feature-list"><li><span>48MP PRO CAMERA</span><span>01</span></li><li><span>120HZ OLED DISPLAY</span><span>02</span></li><li><span>ALL-DAY BATTERY</span><span>03</span></li></ul><a href="#catalog" class="story-cta">Lihat ponsel ini ↘</a></div></div></div></section>
      <section class="flash-sale"><div class="container"><div class="sale-head"><div><div class="eyebrow">Penawaran pilihan / Terbatas</div><h2 class="section-title">Flash <em>sale.</em></h2></div><div class="countdown mono" id="countdown">00:00:00</div></div><div class="flash__grid" id="sale-grid"></div></div></section>
      <section class="catalog container" id="catalog"><div class="catalog-head"><div><div class="eyebrow" id="catalog-count">Katalog / 16 objek</div><h2 class="section-title">Temukan<br><em>andalanmu.</em></h2></div><select class="sort" id="sort"><option value="">Urutkan: Pilihan</option><option value="price-asc">Harga: Terendah</option><option value="price-desc">Harga: Tertinggi</option><option value="rating">Rating tertinggi</option></select></div><div class="filters" id="filters"><button class="filter active" data-filter="all">Semua</button><button class="filter" data-filter="smartphone">Smartphone</button><button class="filter" data-filter="audio">Audio</button><button class="filter" data-filter="smartwatch">Smartwatch</button><button class="filter" data-filter="laptop">Laptop</button><button class="filter" data-filter="aksesoris">Aksesoris</button></div><div class="grid grid--pattern" id="product-grid"></div></section>
      <section class="manifesto"><div class="container"><div class="eyebrow">NOVA GEAR / Cara pandang kami</div><h2>Kurangi noise.<br>Tambah <em>sinyal.</em></h2><p class="manifesto-copy">Gadget yang lebih jujur, dipilih untuk membantu hari-hari terasa lebih ringan.</p><a href="#catalog" class="cta">Lihat semua koleksi <span class="arrow">↗</span></a></div></section>
    </main>
    <footer id="journal"><div class="container"><div class="footer-grid"><div><div class="logo">NOVA <em>GEAR</em></div><p class="footer-lead">Gadget yang dikurasi untuk hidup yang tidak selalu digital.</p><form class="newsletter"><label>Newsletter NOVA</label><div><input type="email" required placeholder="email kamu"/><button type="submit">Daftar ↗</button></div></form></div><div><h4>Jelajahi</h4><a href="#catalog">Semua produk</a><a href="#story">Cerita kami</a><a href="#journal">Jurnal</a></div><div><h4>Bantuan</h4><a href="#journal">Pengiriman & retur</a><a href="#journal">Garansi resmi</a><a href="#journal">Hubungi kami</a></div><div><h4>Pembayaran</h4><p>QRIS · VA · COD</p><p>Cicilan 0%</p><h4 class="footer-subhead">Kurir</h4><p>JNE · SiCepat · GoSend</p></div></div><div class="footer-contact">Jakarta Selatan · hello@novagear.demo · Senin–Sabtu, 09.00–18.00</div><div class="footer-bottom mono"><span>© 2024 NOVA GEAR</span><span>Kebijakan privasi · Syarat & ketentuan</span></div></div></footer>
    <div class="modal-backdrop" id="backdrop"></div><aside class="drawer" id="drawer"><div class="drawer-head"><h2>Your bag <span class="mono">(0)</span></h2><button class="close" id="close-cart">×</button></div><div class="cart-items" id="cart-items"></div><div class="drawer-footer"><div class="shipping-note" id="shipping-note">Gratis ongkir untuk pembelian di atas Rp1.000.000</div><div class="bundle-suggestion"><strong>Sering dibeli bersama</strong><span>Snap Charger 65W · + Rp699.000</span></div><div class="summary-line"><span>Subtotal</span><strong id="cart-subtotal">Rp0</strong></div><div class="summary-line"><span>Shipping</span><strong id="cart-shipping">Gratis</strong></div><div class="summary-line"><strong>Total</strong><strong id="cart-total">Rp0</strong></div><button class="cta checkout-btn" id="checkout-open">Lanjut checkout <span class="arrow">↗</span></button><div class="trust-row"><span>Garansi 1 tahun</span><span>Retur 7 hari</span><span>1–3 hari</span></div><div class="payment-row mono">QRIS · VA · COD · CICILAN 0%</div></div></aside>
    <div class="checkout" id="checkout"><div id="checkout-form-wrap"><button class="close" id="close-checkout">×</button><h2>Almost<br><span class="serif">there.</span></h2><div class="checkout-grid"><form id="checkout-form"><div class="field"><label>Nama lengkap</label><input name="name" required placeholder="Nama kamu" /></div><div class="field"><label>Email</label><input name="email" type="email" required placeholder="kamu@email.com" /></div><div class="field"><label>Nomor telepon</label><input name="phone" required placeholder="08..." /></div><div class="field"><label>Alamat pengiriman</label><textarea name="address" required placeholder="Alamat lengkap"></textarea></div><button class="cta" type="submit">Buat pesanan <span class="arrow">↗</span></button></form><div class="order-box"><div class="mono">ORDER SUMMARY</div><div id="checkout-summary" class="checkout-summary"></div></div></div></div><div class="success" id="success"><div class="success-mark">✓</div><div class="mono">ORDER CONFIRMED</div><h2>Thank<br><span class="serif">you.</span></h2><p>Pesananmu sudah masuk. Kami akan mengirim detail konfirmasi ke email kamu.</p><button class="cta" id="done">Kembali belanja <span class="arrow">↗</span></button></div></div>`;
}

function renderProducts() {
  const filtered = products.filter((product) => activeCategory === "all" || product.category.toLowerCase() === activeCategory);
  const list = [...filtered];
  while (list.length % 3 !== 0) list.push({ filler: true });
  const grid = qs("#product-grid");
  grid.className = `grid${activeCategory === "all" && filtered.length % 8 === 0 ? " grid--pattern" : ""}`;
  grid.innerHTML = list.map((product, index) => {
    if (product.filler) return `<article class="card card--filler" aria-hidden="true"></article>`;
    const badge = product.stock <= 5 ? `Stok tinggal ${product.stock}` : product.badge || "";
    const type = typeFor(product);
    return `<article class="card" data-type="${escapeHTML(type)}"><div class="card__meta"><span>${String(index + 1).padStart(2, "0")} / ${escapeHTML(product.category)}</span><span class="rating"><strong>★</strong> ${product.rating} (${product.reviews})</span></div><div class="card__media">${productSVG(product)}${badge ? `<span class="badge">${escapeHTML(badge)}</span>` : ""}<button class="quick-add" data-add="${product.id}">+ Keranjang</button></div><div class="card__info"><div><div class="product-name">${escapeHTML(product.name)}</div><div class="product-category">${escapeHTML(product.description)}</div></div><div class="product-price">${rupiah(product.price)}<span class="mono installment">${rupiah(product.installment)}/bln</span></div></div></article>`;
  }).join("");
  qs("#catalog-count").textContent = `Katalog / ${filtered.length} objek`;
  gsap.fromTo(grid.children, { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.035, clearProps: "all" });
  grid.querySelectorAll("[data-add]").forEach((button) => button.addEventListener("click", () => addToCart(Number(button.dataset.add))));
}

function renderSale() {
  const wanted = ["phone", "earbuds", "watch", "powerbank"];
  const sale = wanted.map((type) => products.find((product) => typeFor(product) === type)).filter(Boolean);
  qs("#sale-grid").innerHTML = sale.map((product) => {
    const oldPrice = product.oldPrice || Math.ceil(product.price * 1.15 / 1000) * 1000;
    const save = Math.round((1 - product.price / oldPrice) * 100);
    const sold = Math.min(92, 35 + product.id * 3);
    return `<article class="flash-card" data-type="${escapeHTML(typeFor(product))}"><div class="sale-art">${productSVG(product)}</div><h3>${escapeHTML(product.name)}</h3><div class="sale-price">${rupiah(product.price)} <span class="sale-old">${rupiah(oldPrice)}</span><b>-${save}%</b></div><div class="sale-meter"><i style="width:${sold}%"></i></div><div class="mono sale-sold">${sold}% terjual</div></article>`;
  }).join("");
}

function renderCart() {
  const count = cart.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  qs(".cart-count").textContent = count;
  qs(".drawer-head h2").innerHTML = `Tas kamu <span class="mono">(${count})</span>`;
  qs("#cart-subtotal").textContent = rupiah(cart.subtotal);
  qs("#cart-shipping").textContent = cart.shipping ? rupiah(cart.shipping) : "Gratis";
  qs("#cart-total").textContent = rupiah(cart.total);
  const progress = Math.min(100, ((cart.subtotal || 0) / 1000000) * 100);
  qs("#shipping-note").innerHTML = `${cart.freeLeft > 0 ? `Tambah ${rupiah(cart.freeLeft)} lagi untuk gratis ongkir` : "Gratis ongkir aktif — mantap."}<span class="shipping-progress"><i style="width:${progress}%"></i></span>`;
  qs("#cart-items").innerHTML = cart.items?.length ? cart.items.map((item) => `<div class="cart-item"><img src="${imageFor(item.product || {})}" alt="${escapeHTML(item.product?.name || "Produk")}"/><div><h4>${escapeHTML(item.product?.name || "Produk")}</h4><div class="mono">${rupiah(item.product?.price)}</div><div class="qty"><button data-qty="${item.productId}" data-change="-1">−</button><span>${item.quantity}</span><button data-qty="${item.productId}" data-change="1">+</button></div></div><strong class="mono">${rupiah((item.product?.price || 0) * item.quantity)}</strong></div>`).join("") : '<div class="empty">Tas kamu masih kosong.<br>Tambahkan sesuatu yang bagus.</div>';
  qs("#cart-items").querySelectorAll("[data-qty]").forEach((button) => button.addEventListener("click", () => updateQty(Number(button.dataset.qty), Number(button.dataset.change))));
}

async function loadProducts() {
  const data = await api("/products");
  if (data?.data?.length === 16) products = data.data;
  renderProducts();
  renderSale();
}
async function loadCart() {
  const data = await api("/cart");
  if (data?.data) cart = data.data;
  renderCart();
}
function startCountdown() {
  const end = Date.now() + 7 * 60 * 60 * 1000 + 23 * 60 * 1000;
  const tick = () => {
    const left = Math.max(0, end - Date.now());
    qs("#countdown").textContent = [Math.floor(left / 36e5), Math.floor((left % 36e5) / 6e4), Math.floor((left % 6e4) / 1e3)].map((value) => String(value).padStart(2, "0")).join(":");
    if (left) window.setTimeout(tick, 1000);
  };
  tick();
}
async function addToCart(id) {
  const product = products.find((item) => item.id === id);
  const data = await api("/cart/items", { method: "POST", body: JSON.stringify({ productId: id, quantity: 1 }) });
  if (data?.data) cart = data.data;
  else {
    const item = cart.items.find((entry) => entry.productId === id);
    if (item) item.quantity += 1;
    else cart.items.push({ productId: id, quantity: 1, product });
    cart.items.forEach((entry) => { entry.product ||= products.find((item) => item.id === entry.productId); });
    cart.subtotal = cart.items.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
    cart.shipping = cart.subtotal >= 1000000 ? 0 : 25000;
    cart.freeLeft = Math.max(0, 1000000 - cart.subtotal);
    cart.total = cart.subtotal + cart.shipping;
  }
  renderCart();
  openDrawer();
}
async function updateQty(id, change) {
  const item = cart.items.find((entry) => entry.productId === id);
  const data = await api(`/cart/items/${id}`, { method: "PATCH", body: JSON.stringify({ quantity: (item?.quantity || 0) + change }) });
  if (data?.data) cart = data.data;
  else if (item) {
    item.quantity += change;
    if (item.quantity <= 0) cart.items = cart.items.filter((entry) => entry.productId !== id);
    cart.subtotal = cart.items.reduce((sum, entry) => sum + entry.product.price * entry.quantity, 0);
    cart.shipping = cart.subtotal >= 1000000 ? 0 : 25000;
    cart.freeLeft = Math.max(0, 1000000 - cart.subtotal);
    cart.total = cart.subtotal + cart.shipping;
  }
  renderCart();
}
function openDrawer() { qs("#drawer").classList.add("open"); qs("#backdrop").classList.add("show"); }
function closeAll() { qs("#drawer").classList.remove("open"); qs("#checkout").classList.remove("show"); qs("#backdrop").classList.remove("show"); }
function checkout() {
  if (!cart.items?.length) return;
  qs("#checkout-summary").innerHTML = `${cart.items.map((item) => `<div class="summary-line"><span>${escapeHTML(item.product.name)} × ${item.quantity}</span><strong>${rupiah(item.product.price * item.quantity)}</strong></div>`).join("")}<div class="rule"></div><div class="summary-line"><strong>Total</strong><strong>${rupiah(cart.total)}</strong></div>`;
  qs("#drawer").classList.remove("open");
  qs("#checkout").classList.add("show");
}

function setupRenderer(canvas, camera, scene) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const resize = () => {
    const width = Math.max(1, canvas.clientWidth);
    const height = Math.max(1, canvas.clientHeight);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();
  return { renderer, observer, scene };
}

function addLights(scene) {
  scene.add(new THREE.HemisphereLight(0xf2eee6, 0x333333, 2.1));
  const key = new THREE.DirectionalLight(0xffd0b9, 4);
  key.position.set(-3, 4, 5);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xd8f24a, 1.1);
  fill.position.set(3, 1, 2);
  scene.add(fill);
}

function initThree() {
  const heroCanvas = qs("#hero-canvas");
  const heroCanvasWrap = qs("#hero-canvas-wrap");
  const storyCanvas = qs("#story-canvas");
  if (!heroCanvas || !heroCanvasWrap || !storyCanvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    qs(".fallback-phone").style.display = "block";
    qs(".story-fallback").style.display = "flex";
    return;
  }
  try {
    const heroScene = new THREE.Scene();
    const heroCamera = new THREE.PerspectiveCamera(32, 1, 0.01, 100);
    heroCamera.position.set(0, 0, 4.2);
    heroCamera.lookAt(0, 0, 0);
    const heroSetup = setupRenderer(heroCanvas, heroCamera, heroScene);
    const heroPhone = createPhone();
    heroPhone.rotation.z = -0.12;
    heroPhone.scale.setScalar(1.25);
    heroScene.add(heroPhone);
    addLights(heroScene);

    const storyScene = new THREE.Scene();
    const storyCamera = new THREE.PerspectiveCamera(34, 1, 0.01, 100);
    storyCamera.position.set(0, 0, 2.5);
    const storySetup = setupRenderer(storyCanvas, storyCamera, storyScene);
    const storyPhone = createPhone();
    storyScene.add(storyPhone);
    addLights(storyScene);

    const storyStates = [
      { rotation: new THREE.Euler(0.04, -0.22, -0.08), camera: [0, 0, 2.3], target: [0, 0, 0] },
      { rotation: new THREE.Euler(0.1, 0.35, 0.02), camera: [0.05, 0, 2.05], target: [0, 0, 0] },
      { rotation: new THREE.Euler(-0.1, -0.5, 0.08), camera: [0, -0.02, 2.65], target: [0, 0, 0] },
    ];
    const storyTexts = [
      ["01 / 03 — Kamera", "Lihat yang<br>terlewat.", "Sensor Pro menangkap detail yang biasanya hilang. Bukan untuk membuatmu jadi fotografer — untuk membuat momen biasa terasa cukup."],
      ["02 / 03 — Layar", "Rasakan<br>setiap warna.", "Layar OLED 120Hz membuat gerakan terasa bersih, teks terasa tenang, dan setiap detail punya ruang untuk bernapas."],
      ["03 / 03 — Baterai", "Sampai<br>hari selesai.", "Baterai seharian menjaga ritme tetap utuh. Tidak ada drama kabel ketika hal yang penting sedang berjalan."],
    ];
    const setStoryStep = (index) => {
      const state = storyStates[index];
      gsap.to(storyPhone.rotation, { x: state.rotation.x, y: state.rotation.y, z: state.rotation.z, duration: 0.7, ease: "power2.out" });
      gsap.to(storyCamera.position, { x: state.camera[0], y: state.camera[1], z: state.camera[2], duration: 0.7, ease: "power2.out" });
      qs("#story-label").textContent = storyTexts[index][0];
      qs("#story-title").innerHTML = storyTexts[index][1];
      qs("#story-text").textContent = storyTexts[index][2];
      document.querySelectorAll(".story__step").forEach((step, stepIndex) => step.classList.toggle("active", stepIndex === index));
    };
    document.querySelectorAll(".story__step").forEach((step) => step.addEventListener("click", () => setStoryStep(Number(step.dataset.step))));
    ScrollTrigger.create({ trigger: ".story", start: "top top+=15%", end: "bottom bottom-=15%", pin: ".story__grid", scrub: 0.6, onUpdate: (self) => setStoryStep(Math.min(2, Math.floor(self.progress * 3))) });

    let pointer = 0;
    const onPointer = (event) => { pointer = (event.clientX / window.innerWidth - 0.5) * 0.25; };
    window.addEventListener("pointermove", onPointer, { passive: true });
    const render = () => {
      heroPhone.rotation.y += (0.22 + pointer - heroPhone.rotation.y) * 0.025;
      heroPhone.rotation.x += (0.05 - heroPhone.rotation.x) * 0.025;
      heroSetup.renderer.render(heroScene, heroCamera);
      storySetup.renderer.render(storyScene, storyCamera);
      requestAnimationFrame(render);
    };
    render();
    window.addEventListener("beforeunload", () => {
      window.removeEventListener("pointermove", onPointer);
      heroSetup.observer.disconnect();
      storySetup.observer.disconnect();
      disposePhone(heroPhone);
      disposePhone(storyPhone);
      heroSetup.renderer.dispose();
      storySetup.renderer.dispose();
    }, { once: true });
  } catch {
    qs(".fallback-phone").style.display = "block";
    qs(".story-fallback").style.display = "flex";
  }
}

function initLenis() {
  const lenis = new Lenis({ smoothWheel: true, syncTouch: false });
  window.__lenis = lenis;
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  return lenis;
}

function init() {
  shell();
  const lenis = initLenis();
  renderProducts();
  renderSale();
  startCountdown();
  renderCart();
  loadProducts();
  loadCart();
  initThree();
  const refresh = () => ScrollTrigger.refresh();
  const setHeaderHeight = () => {
    const topline = qs(".topline");
    const nav = qs("nav");
    document.documentElement.style.setProperty("--header-h", `${(topline?.offsetHeight || 0) + (nav?.offsetHeight || 0)}px`);
  };
  setHeaderHeight();
  window.addEventListener("resize", setHeaderHeight, { passive: true });
  if (document.fonts?.ready) document.fonts.ready.then(() => { setHeaderHeight(); refresh(); });
  window.addEventListener("load", () => { setHeaderHeight(); refresh(); }, { once: true });
  qs("#open-cart").onclick = openDrawer;
  qs("#close-cart").onclick = closeAll;
  qs("#backdrop").onclick = closeAll;
  qs("#checkout-open").onclick = checkout;
  qs("#close-checkout").onclick = closeAll;
  qs("#done").onclick = () => { closeAll(); window.scrollTo({ top: 0, behavior: "smooth" }); };
  qs("#filters").onclick = (event) => {
    const filter = event.target.closest(".filter");
    if (!filter) return;
    activeCategory = filter.dataset.filter;
    document.querySelectorAll(".filter").forEach((item) => item.classList.remove("active"));
    filter.classList.add("active");
    renderProducts();
  };
  qs("#sort").onchange = async (event) => {
    const data = await api(`/products?category=${activeCategory}&sort=${event.target.value}`);
    if (data?.data?.length) products = data.data;
    else if (event.target.value) products = [...products].sort((a, b) => event.target.value === "price-asc" ? a.price - b.price : event.target.value === "price-desc" ? b.price - a.price : b.rating - a.rating);
    renderProducts();
  };
  qs("#checkout-form").onsubmit = async (event) => {
    event.preventDefault();
    const data = await api("/checkout", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(event.target))) });
    if (data?.data || !API) {
      qs("#checkout-form-wrap").style.display = "none";
      qs("#success").classList.add("show");
      cart = { items: [], subtotal: 0, shipping: 0, total: 0, freeLeft: 1000000 };
      renderCart();
    }
  };
  qs(".newsletter").onsubmit = (event) => { event.preventDefault(); event.currentTarget.innerHTML = '<strong class="newsletter-success">Terima kasih — cek inbox kamu.</strong>'; };
  window.addEventListener("beforeunload", () => lenis.destroy(), { once: true });
}

init();
