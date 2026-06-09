// --- PRODUCT DATABASE (16 Real Products Extracted from Store) ---
const PRODUCTS = [
  {
    id: 1,
    title: { ar: "باقة ورد فنية راقية", en: "Elegant Artistic Flower Bouquet" },
    price: 219,
    image: "./assets/2fd6d6e2-2b49-4629-9584-e7fb8cdf22ae-366.75126903553x500-BvawSaM4Kmi7IWKgBPCHqDWvxyD3DSiKEk1wcYZJ.jpg",
    category: "flowers",
    popular: true
  },
  {
    id: 2,
    title: { ar: "فازة ورد فاخرة", en: "Luxury Flower Vase" },
    price: 320,
    image: "./assets/fae2e185-28b5-40ba-8dea-dad217f1669a-375x500-m7sivDY8K8WUsyAc6s6wSpdPYtwgtxoBnxvyio8Q.jpg",
    category: "vases",
    popular: true
  },
  {
    id: 3,
    title: { ar: "ستاند مبروك المولودة الفاخر", en: "Congratulations Stand (Baby Girl)" },
    price: 299,
    image: "./assets/23036379-92a2-4e23-b0c3-3ca6df0e652b-370.625x500-5xmTIQo9beVdmpNGNq1MvoXLLF3Nj4QktdK2TSld.jpg",
    category: "celebrations",
    popular: false
  },
  {
    id: 4,
    title: { ar: "ستاند مبروك المولود الأنيق", en: "Congratulations Stand (Baby Boy)" },
    price: 299,
    image: "./assets/ea8e721f-df3b-4b2a-913e-3bd1704dff38-383.4375x500-FHA9IOIdijPBvOkEWlrlztKQlEesFLSNCd9aFLg5.jpg",
    category: "celebrations",
    popular: false
  },
  {
    id: 5,
    title: { ar: "بوكس Welcome Baby Girl المبهج", en: "Welcome Baby Girl Gift Box" },
    price: 299,
    image: "./assets/bca65160-ef94-4459-8af1-5d612eb913a9-311.25x500-02dpUPhP9nPv5ifFLBuzF0BOyFS93lpjGBVhAUOD.jpg",
    category: "celebrations",
    popular: true
  },
  {
    id: 6,
    title: { ar: "بوكس Welcome Baby Boy المبهج", en: "Welcome Baby Boy Gift Box" },
    price: 299,
    image: "./assets/19596988-e88a-4c73-b874-9d6caf191a32-331.61953727506x500-2WISQ09lnqgLEq4G7EimVIl616S3TvwR6oxbZVFD.jpg",
    category: "celebrations",
    popular: false
  },
  {
    id: 7,
    title: { ar: "مجموعة الهدايا الفخمة CARLOTTA", en: "CARLOTTA Luxury Gift Set" },
    price: 400,
    image: "./assets/8d6d2e99-51ca-4506-997f-5970ae340b12-397.84946236559x500-QtglFi4dwjqmRJbi8H7T5jyxPLUIepfLsXL3HDZD.jpg",
    category: "gifts",
    popular: true
  },
  {
    id: 8,
    title: { ar: "باقة ورد تخرج مميزة", en: "Graduation Flower Bouquet" },
    price: 200,
    image: "./assets/4632a105-a287-4b3c-a986-780ca2d73811-366.75126903553x500-1pz5iHLIrWNfwVyopKSOOqZMCevEkR0FMEyHXoFE.jpg",
    category: "flowers",
    popular: false
  },
  {
    id: 9,
    title: { ar: "باقة ورد تهنئة بالمنزل الجديد", en: "New Home Flower Bouquet" },
    price: 200,
    image: "./assets/6bd94ae0-5d41-4ad4-818b-0612fb10dd6a-366.75126903553x500-DolCxwAbNHKwbibLrrF5HsLkmhMC7XENUfh43mJE.jpg",
    category: "flowers",
    popular: false
  },
  {
    id: 10,
    title: { ar: "باقة ورد مبارك المنزل الفاخرة", en: "Congratulations House Warming Bouquet" },
    price: 200,
    image: "./assets/8f692127-d779-4156-8346-89db09d0306b-366.75126903553x500-PllrmWgUKAA7RetgQbDpkmykdawgWRmcGFoRnK4B.jpg",
    category: "flowers",
    popular: true
  },
  {
    id: 11,
    title: { ar: "باقة ورد استقبال عروس راقية", en: "Bride Reception Flower Bouquet" },
    price: 200,
    image: "./assets/da45c415-5ed8-4db6-b5fe-7a129b9c2293-366.75126903553x500-1udH5pM9EPYV2CUrxertwoQRYzWs6VXDskverfwE.jpg",
    category: "flowers",
    popular: false
  },
  {
    id: 12,
    title: { ar: "باقة ورد التخرج الأنيقة", en: "Classy Graduation Bouquet" },
    price: 200,
    image: "./assets/46167e5a-7752-4db0-9281-dfd0e18404ae-366.75126903553x500-hd5cBGIg1Mwo1R1NCc5g9iWSswLZqU5QZnI2viwM.jpg",
    category: "flowers",
    popular: false
  },
  {
    id: 13,
    title: { ar: "فازة ورد عيد الأم الجميلة", en: "Mother's Day Flower Vase" },
    price: 249,
    image: "./assets/0d581775-3669-4785-a9d3-60356f32ee8f-375x500-eTcyrQIMMj0b1bTzRewR7U3zZzw1xCf72jg58x13.jpg",
    category: "vases",
    popular: true
  },
  {
    id: 14,
    title: { ar: "بوكس ورد منزل مبارك الأنيق", en: "Bless This Home Flower Box" },
    price: 441,
    image: "./assets/ad5e50aa-77f1-46d2-88f3-a6bb9f378a5d-375x500-Kl3jsrYiWBeKhvdR5MdgjiWwH2RDwuLnp1jWpjbp.jpg",
    category: "vases",
    popular: false
  },
  {
    id: 15,
    title: { ar: "فازة الورد الساحرة والمميزة", en: "Graceful Flower Vase" },
    price: 499,
    image: "./assets/b5c1b30e-900f-43d9-ac03-3ef480104534-375x500-XPgm4vRFSyxfTKcjGodXMkegcMsI1hg1uh4NF5tW.jpg",
    category: "vases",
    popular: false
  },
  {
    id: 16,
    title: { ar: "حقيبة الورد الأنيقة والفريدة", en: "Elegant Flower Handbag" },
    price: 430,
    image: "./assets/27529d37-ee2f-4e59-b006-ce11034244a1-375x500-HKeB2jduPBg81ljFewpNgZbhTt0iTwHDfii42aBe.jpg",
    category: "flowers",
    popular: true
  }
];

// --- TRANSLATIONS DICTIONARY ---
const TRANSLATIONS = {
  ar: {
    siteTitle: "هديتي | ورود وتجهيز مناسبات قطر — توصيل لجميع المناطق",
    metaDesc: "هديتي للورود وتجهيز المناسبات في قطر. يوجد توصيل لجميع مناطق قطر. للطلب اضغط على لينك الواتس. الخريطيات - الشارع التجاري - مقابل البنك التجاري.",
    navHome: "الرئيسية",
    navFlowers: "باقات ورد",
    navVases: "فازات ورد",
    navCelebrations: "مواليد ومناسبات",
    navGifts: "هدايا ومجموعات",
    btnSearch: "بحث",
    searchPlaceholder: "ابحث عن باقة ورد، فازة، أو تنسيق...",
    cartTitle: "طلبك من هديتي",
    cartEmpty: "سلتك فارغة حالياً — اختر من منتجاتنا الجميلة!",
    btnAddToCart: "أضف للطلب",
    btnAddedToCart: "تمت الإضافة ✔",
    btnCheckout: "أكمل طلبك عبر واتساب",
    btnContinueShopping: "تصفح المزيد",
    shipping: "التوصيل لجميع مناطق قطر:",
    free: "مجاني 🇶🇦",
    checkoutTitle: "أكمل طلبك — سيتواصل معك فريق هديتي",
    clientName: "اسمك الكريم",
    clientPhone: "رقم واتسابك في قطر",
    clientAddress: "منطقتك في قطر (للتوصيل)",
    paymentMethod: "طريقة الدفع",
    payApple: "Apple Pay",
    payCard: "بطاقة ائتمان / مدى",
    payCod: "دفع عند الاستلام",
    btnPayNow: "أرسل طلبي لهديتي",
    orderSuccessTitle: "تم استلام طلبك بنجاح! 🌸",
    orderSuccessDesc: "شكراً لثقتك بهديتي 💜 سيتواصل معك فريقنا عبر الواتساب قريباً لتنسيق تفاصيل طلبك وتحديد موعد التوصيل.",
    orderReceipt: "منتجاتك المختارة",
    orderNum: "رقم طلبك:",
    btnBackHome: "تصفح مزيد من تشكيلاتنا",
    footerDesc: "هديتي للورود وتجهيز المناسبات — نقدم أجمل باقات الورد وتنسيقات الهدايا الراقية مع توصيل سريع لجميع مناطق قطر.",
    footerContact: "تواصل معنا",
    footerAddress: "الخريطيات - الشارع التجاري - مقابل البنك التجاري، الدوحة، قطر",
    footerRights: "جميع الحقوق محفوظة © هديتي 2026 | قطر | @hdyati22",
    heroTitle: "هديتي للورود وتجهيز المناسبات",
    heroSub: "يوجد توصيل لجميع مناطق قطر 🇶🇦 — للطلب اضغط على لينك الواتس ⬇️",
    catAll: "الكل",
    sortBy: "تصفية",
    sortPopular: "الأكثر طلباً",
    toastAdded: "تمت إضافة المنتج إلى طلبك!",
    featuredProducts: "تشكيلاتنا المختارة"
  },
  en: {
    siteTitle: "Hdyati | Flowers & Events in Qatar — Delivery All Areas",
    metaDesc: "Hdyati (@hdyati22) — Flowers & event arrangements in Qatar. Delivery to all Qatar areas. Order via WhatsApp 77403038. Al-Kharaitiyat, Commercial Street, Doha.",
    navHome: "Home",
    navFlowers: "Bouquets",
    navVases: "Vases",
    navCelebrations: "Newborns & Events",
    navGifts: "Gift Sets",
    btnSearch: "Search",
    searchPlaceholder: "Search bouquets, vases, gifts...",
    cartTitle: "Your Order",
    cartEmpty: "Your cart is empty — browse our beautiful arrangements!",
    btnAddToCart: "Add to Order",
    btnAddedToCart: "Added ✔",
    btnCheckout: "Complete Order via WhatsApp",
    btnContinueShopping: "Browse More",
    shipping: "Delivery (All Qatar):",
    free: "Free 🇶🇦",
    checkoutTitle: "Complete Your Order — Hdyati Team Will Contact You",
    clientName: "Your Name",
    clientPhone: "WhatsApp Number (Qatar)",
    clientAddress: "Your Area in Qatar (for delivery)",
    paymentMethod: "Payment Method",
    payApple: "Apple Pay",
    payCard: "Credit Card / Debit",
    payCod: "Cash on Delivery",
    btnPayNow: "Send Order to Hdyati",
    orderSuccessTitle: "Order Received! 🌸",
    orderSuccessDesc: "Thank you for choosing Hdyati 💜 Our team will contact you on WhatsApp shortly to confirm your order and delivery details.",
    orderReceipt: "Your Selected Items",
    orderNum: "Order #:",
    btnBackHome: "Browse More Arrangements",
    footerDesc: "Hdyati (@hdyati22) — Flowers & event arrangements with delivery to all Qatar areas. Order via WhatsApp.",
    footerContact: "Contact Us",
    footerAddress: "Al-Kharaitiyat, Commercial Street, Opposite Commercial Bank, Doha, Qatar",
    footerRights: "All rights reserved © Hdyati 2026 | Qatar | @hdyati22",
    heroTitle: "Hdyati — Flowers & Event Arrangements",
    heroSub: "Delivery to all Qatar areas 🇶🇦 — Order via WhatsApp and we'll contact you right away ⬇️",
    catAll: "All",
    sortBy: "Filter",
    sortPopular: "Most Popular",
    toastAdded: "Added to your order!",
    featuredProducts: "Our Arrangements"
  }
};

// --- APP STATE ---
let state = {
  lang: "ar",
  theme: "light",
  category: "all",
  searchQuery: "",
  sortBy: "popular",
  cart: [],
  wishlist: []
};

// --- DOM ELEMENTS ---
const elements = {
  html: document.documentElement,
  body: document.body,
  langBtn: document.getElementById("lang-btn"),
  themeBtn: document.getElementById("theme-btn"),
  
  // Navigation & Search
  navHome: document.getElementById("nav-home"),
  navFlowers: document.getElementById("nav-flowers"),
  navVases: document.getElementById("nav-vases"),
  navCelebrations: document.getElementById("nav-celebrations"),
  navGifts: document.getElementById("nav-gifts"),
  searchBar: document.getElementById("search-bar"),
  searchBtn: document.getElementById("search-btn"),
  
  // Hero
  heroTitle: document.getElementById("hero-title"),
  heroSub: document.getElementById("hero-sub"),
  heroCta: document.getElementById("hero-cta"),
  
  // Categories Horizontal Links
  catScroll: document.getElementById("category-scroll"),
  
  // Catalog Controls & Products
  featuredTitle: document.getElementById("featured-title"),
  sortLabel: document.getElementById("sort-label"),
  sortSelect: document.getElementById("sort-select"),
  productsGrid: document.getElementById("products-grid"),
  
  // Cart Drawer
  cartToggleBtn: document.getElementById("cart-toggle-btn"),
  cartCountBadge: document.getElementById("cart-count-badge"),
  cartDrawer: document.getElementById("cart-drawer"),
  cartOverlay: document.getElementById("cart-overlay"),
  cartCloseBtn: document.getElementById("cart-close-btn"),
  cartDrawerTitle: document.getElementById("cart-drawer-title"),
  cartItemsContainer: document.getElementById("cart-items"),
  cartSummaryContainer: document.getElementById("cart-summary"),
  cartCheckoutBtn: document.getElementById("cart-checkout-btn"),
  
  // Footer
  footerDesc: document.getElementById("footer-desc"),
  footerContactH: document.getElementById("footer-contact-h"),
  footerAddressText: document.getElementById("footer-address-text"),
  footerRightsText: document.getElementById("footer-rights-text"),
  
  // Checkout Modal
  checkoutModal: document.getElementById("checkout-modal"),
  checkoutClose: document.getElementById("checkout-close"),
  checkoutFormTitle: document.getElementById("checkout-form-title"),
  checkoutForm: document.getElementById("checkout-form"),
  checkoutNameLabel: document.getElementById("checkout-name-label"),
  checkoutPhoneLabel: document.getElementById("checkout-phone-label"),
  checkoutAddressLabel: document.getElementById("checkout-address-label"),
  checkoutPayLabel: document.getElementById("checkout-pay-label"),
  checkoutBtnPay: document.getElementById("checkout-btn-pay"),
  
  // Success Modal
  successModal: document.getElementById("success-modal"),
  successTitle: document.getElementById("success-title"),
  successDesc: document.getElementById("success-desc"),
  successReceiptTitle: document.getElementById("success-receipt-title"),
  successReceiptDetails: document.getElementById("success-receipt-details"),
  successBackBtn: document.getElementById("success-back-btn"),
  
  toast: document.getElementById("toast")
};

// --- INITIALIZE APPLICATION ---
function init() {
  // Initialize state from local storage if any
  loadStateFromLocalStorage();
  
  // Bind UI inputs and event listeners
  bindEvents();
  
  // Setup dynamic components
  updateLanguageUI();
  updateThemeUI();
  renderCategories();
  renderProducts();
  updateCartUI();
}

// --- SAVE / LOAD STATE ---
function saveStateToLocalStorage() {
  localStorage.setItem("hedyaty_cart", JSON.stringify(state.cart));
  localStorage.setItem("hedyaty_wishlist", JSON.stringify(state.wishlist));
}

function loadStateFromLocalStorage() {
  const savedCart = localStorage.getItem("hedyaty_cart");
  const savedWishlist = localStorage.getItem("hedyaty_wishlist");
  if (savedCart) state.cart = JSON.parse(savedCart);
  if (savedWishlist) state.wishlist = JSON.parse(savedWishlist);
}

// --- BIND EVENT LISTENERS ---
function bindEvents() {
  // Lang & Theme Toggles
  elements.langBtn.addEventListener("click", toggleLanguage);
  elements.themeBtn.addEventListener("click", toggleTheme);
  
  // Menu Navigation Click Filters
  const menuItems = [
    { el: elements.navHome, cat: "all" },
    { el: elements.navFlowers, cat: "flowers" },
    { el: elements.navVases, cat: "vases" },
    { el: elements.navCelebrations, cat: "celebrations" },
    { el: elements.navGifts, cat: "gifts" }
  ];
  menuItems.forEach(item => {
    if (item.el) {
      item.el.addEventListener("click", (e) => {
        e.preventDefault();
        setCategory(item.cat);
        // Scroll to products grid
        elements.productsGrid.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
  
  // Search actions
  elements.searchBtn.addEventListener("click", performSearch);
  elements.searchBar.addEventListener("keyup", (e) => {
    if (e.key === "Enter") performSearch();
  });
  
  // Sort actions
  elements.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });
  
  // Cart toggle drawer actions
  elements.cartToggleBtn.addEventListener("click", toggleCartDrawer);
  elements.cartCloseBtn.addEventListener("click", toggleCartDrawer);
  elements.cartOverlay.addEventListener("click", toggleCartDrawer);
  elements.cartCheckoutBtn.addEventListener("click", openCheckoutModal);
  
  // Checkout form submit
  elements.checkoutClose.addEventListener("click", toggleCheckoutModal);
  elements.checkoutForm.addEventListener("submit", handleCheckoutSubmit);
  
  // Success close
  elements.successBackBtn.addEventListener("click", () => {
    elements.successModal.classList.remove("open");
  });
  
  // Hero CTA scroll
  elements.heroCta.addEventListener("click", (e) => {
    e.preventDefault();
    elements.productsGrid.scrollIntoView({ behavior: 'smooth' });
  });
}

// --- TOGGLE CART DRAWER ---
function toggleCartDrawer() {
  elements.cartDrawer.classList.toggle("open");
  elements.cartOverlay.classList.toggle("open");
}

// --- SET DYNAMIC CATEGORIES ---
function setCategory(cat) {
  state.category = cat;
  
  // Active links highlighting
  const scrollBtns = elements.catScroll.querySelectorAll(".cat-scroll-btn");
  scrollBtns.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
  
  renderProducts();
}

function performSearch() {
  state.searchQuery = elements.searchBar.value.trim().toLowerCase();
  renderProducts();
}

// --- RENDER DYNAMIC CATEGORY SCROLL ---
function renderCategories() {
  const t = TRANSLATIONS[state.lang];
  const cats = [
    { id: "all", name: t.catAll, icon: "fa-border-all" },
    { id: "flowers", name: t.navFlowers, icon: "fa-spa" },
    { id: "vases", name: t.navVases, icon: "fa-wine-glass-alt" },
    { id: "celebrations", name: t.navCelebrations, icon: "fa-baby-carriage" },
    { id: "gifts", name: t.navGifts, icon: "fa-gift" }
  ];
  
  elements.catScroll.innerHTML = "";
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `cat-scroll-btn ${state.category === cat.id ? "active" : ""}`;
    btn.dataset.cat = cat.id;
    btn.innerHTML = `<i class="fas ${cat.icon}"></i> <span>${cat.name}</span>`;
    btn.addEventListener("click", () => setCategory(cat.id));
    elements.catScroll.appendChild(btn);
  });
}

// --- RENDER DYNAMIC PRODUCTS CATALOG ---
function renderProducts() {
  const t = TRANSLATIONS[state.lang];
  
  // Filter products by category and search query
  let filtered = PRODUCTS.filter(prod => {
    const matchesCategory = state.category === "all" || prod.category === state.category;
    const matchesSearch = prod.title[state.lang].toLowerCase().includes(state.searchQuery);
    return matchesCategory && matchesSearch;
  });
  
  // Sort products (popular only — prices are hidden)
  filtered.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
  
  // Render cards
  elements.productsGrid.innerHTML = "";
  if (filtered.length === 0) {
    elements.productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">${state.lang === 'ar' ? 'لا توجد منتجات مطابقة للبحث.' : 'No products match your search.'}</p>`;
    return;
  }
  
  filtered.forEach(prod => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-card-image">
        <img class="lazy-image" src="${prod.image}" alt="${prod.title[state.lang]}" loading="lazy">
      </div>
      <div class="product-card-content">
        <h3 class="product-title">${prod.title[state.lang]}</h3>
        <div class="product-card-footer">
          <button class="add-to-cart-btn" data-id="${prod.id}">
            <i class="fas fa-shopping-bag"></i> <span>${t.btnAddToCart}</span>
          </button>
        </div>
      </div>
    `;
    
    // Add add-to-cart action
    card.querySelector(".add-to-cart-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      addToCart(prod.id, e.target);
    });
    
    elements.productsGrid.appendChild(card);
  });
}

// --- WISHLIST MANAGEMENT ---
function toggleWishlist(prodId) {
  const idx = state.wishlist.indexOf(prodId);
  if (idx > -1) {
    state.wishlist.splice(idx, 1);
  } else {
    state.wishlist.push(prodId);
  }
  saveStateToLocalStorage();
  renderProducts();
  showToast(TRANSLATIONS[state.lang].toastFavToggle);
}

// --- SHOPPING CART OPERATIONS ---
function addToCart(prodId, buttonEl) {
  const t = TRANSLATIONS[state.lang];
  const prod = PRODUCTS.find(p => p.id === prodId);
  if (!prod) return;
  
  // Check if already in cart
  const cartItem = state.cart.find(item => item.id === prodId);
  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    state.cart.push({ id: prodId, quantity: 1 });
  }
  
  saveStateToLocalStorage();
  updateCartUI();
  showToast(t.toastAdded);
  
  // Show animation state on the card button
  const originalHtml = buttonEl.innerHTML;
  buttonEl.innerHTML = `<i class="fas fa-check"></i> <span>${t.btnAddedToCart}</span>`;
  buttonEl.style.backgroundColor = "var(--success)";
  buttonEl.style.borderColor = "var(--success)";
  buttonEl.style.color = "#ffffff";
  buttonEl.disabled = true;
  
  setTimeout(() => {
    buttonEl.innerHTML = originalHtml;
    buttonEl.style.backgroundColor = "";
    buttonEl.style.borderColor = "";
    buttonEl.style.color = "";
    buttonEl.disabled = false;
  }, 1500);
}

function updateCartUI() {
  const t = TRANSLATIONS[state.lang];
  
  // Update Header Badge Count
  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.cartCountBadge.innerText = totalCount;
  elements.cartCountBadge.style.display = totalCount > 0 ? "flex" : "none";
  
  // Render Drawer Items
  elements.cartItemsContainer.innerHTML = "";
  if (state.cart.length === 0) {
    elements.cartItemsContainer.innerHTML = `<p style="text-align: center; padding: 40px 10px; color: var(--text-muted);">${t.cartEmpty}</p>`;
    elements.cartSummaryContainer.style.display = "none";
    elements.cartCheckoutBtn.style.display = "none";
    return;
  }
  
  elements.cartSummaryContainer.style.display = "block";
  elements.cartCheckoutBtn.style.display = "block";
  
  state.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (!prod) return;
    
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${prod.image}" alt="${prod.title[state.lang]}">
      <div class="cart-item-details">
        <h4>${prod.title[state.lang]}</h4>
        <div class="cart-item-qty-ctrl">
          <button class="qty-btn minus" data-id="${item.id}"><i class="fas fa-minus"></i></button>
          <span>${item.quantity}</span>
          <button class="qty-btn plus" data-id="${item.id}"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button class="cart-item-delete" data-id="${item.id}"><i class="far fa-trash-alt"></i></button>
    `;
    
    // Bind quantities adjustment listeners
    div.querySelector(".qty-btn.minus").addEventListener("click", () => adjustCartQuantity(item.id, -1));
    div.querySelector(".qty-btn.plus").addEventListener("click", () => adjustCartQuantity(item.id, 1));
    div.querySelector(".cart-item-delete").addEventListener("click", () => removeFromCart(item.id));
    
    elements.cartItemsContainer.appendChild(div);
  });
  
  // Show checkout button & hide summary totals (no prices)
  elements.cartSummaryContainer.innerHTML = `
    <div class="summary-row">
      <span>${t.shipping}</span>
      <strong style="color: var(--success);">${t.free}</strong>
    </div>
  `;
}

function adjustCartQuantity(prodId, amount) {
  const item = state.cart.find(i => i.id === prodId);
  if (!item) return;
  
  item.quantity += amount;
  if (item.quantity <= 0) {
    removeFromCart(prodId);
  } else {
    saveStateToLocalStorage();
    updateCartUI();
  }
}

function removeFromCart(prodId) {
  const idx = state.cart.findIndex(i => i.id === prodId);
  if (idx > -1) {
    state.cart.splice(idx, 1);
    saveStateToLocalStorage();
    updateCartUI();
  }
}

// --- CHECKOUT SIMULATION ---
function toggleCheckoutModal() {
  elements.checkoutModal.classList.toggle("open");
}

function openCheckoutModal() {
  toggleCartDrawer();
  toggleCheckoutModal();
}

function handleCheckoutSubmit(e) {
  e.preventDefault();
  const t = TRANSLATIONS[state.lang];
  
  // Read inputs values
  const name = document.getElementById("client-name").value.trim();
  const phone = document.getElementById("client-phone").value.trim();
  const address = document.getElementById("client-address").value.trim();
  const payment = document.querySelector('input[name="payment"]:checked').value;
  
  if (!name || !phone || !address) {
    alert(state.lang === 'ar' ? 'الرجاء تعبئة كافة حقول التوصيل.' : 'Please fill all delivery fields.');
    return;
  }
  
  // Generate random order number
  const orderNumber = "HD-" + Math.floor(100000 + Math.random() * 900000);
  
  // Calculate final receipt HTML (no prices shown)
  let receiptHTML = `<div style="display:flex; flex-direction:column; gap:8px;">`;
  state.cart.forEach(item => {
    const prod = PRODUCTS.find(p => p.id === item.id);
    if (prod) {
      receiptHTML += `
        <div style="display:flex; justify-content:space-between; font-size:0.88rem; border-bottom:1px dashed #eee; padding-bottom:6px;">
          <span>${prod.title[state.lang]}</span>
          <strong style="color:var(--primary);">× ${item.quantity}</strong>
        </div>
      `;
    }
  });
  receiptHTML += `</div>`;
  
  // Render Success receipt
  elements.successReceiptDetails.innerHTML = `
    <div style="background:var(--input-bg); border:1px solid var(--card-border); border-radius:12px; padding:15px; margin-bottom:15px;">
      <div style="font-weight:600; margin-bottom:8px;">${t.orderNum} <span style="color:var(--primary-reverse); font-weight:700;">${orderNumber}</span></div>
      <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:12px;">${name} | ${phone} | ${address}</div>
      ${receiptHTML}
    </div>
  `;
  
  // Clear cart state
  state.cart = [];
  saveStateToLocalStorage();
  updateCartUI();
  
  // Toggle modals
  toggleCheckoutModal();
  elements.successModal.classList.add("open");
  
  // Clear form inputs
  elements.checkoutForm.reset();
}

// --- SWITCH LANGUAGES ---
function toggleLanguage() {
  state.lang = state.lang === "ar" ? "en" : "ar";
  updateLanguageUI();
}

function updateLanguageUI() {
  const t = TRANSLATIONS[state.lang];
  
  // Set html direction and title
  elements.html.setAttribute("lang", state.lang);
  elements.html.setAttribute("dir", state.lang === "ar" ? "rtl" : "ltr");
  document.title = t.siteTitle;
  
  // Toggle body classes
  elements.body.className = `${state.theme === "dark" ? "dark-mode" : ""} lang-${state.lang}`;
  
  // Switch buttons
  elements.langBtn.innerHTML = state.lang === "ar" ? `<i class="fas fa-globe"></i> English` : `<i class="fas fa-globe"></i> العربية`;
  
  // Navigation Menu Links
  elements.navHome.innerText = t.navHome;
  elements.navFlowers.innerText = t.navFlowers;
  elements.navVases.innerText = t.navVases;
  elements.navCelebrations.innerText = t.navCelebrations;
  elements.navGifts.innerText = t.navGifts;
  
  // Search bar
  elements.searchBar.placeholder = t.searchPlaceholder;
  elements.searchBtn.innerText = t.btnSearch;
  
  // Hero text
  elements.heroTitle.innerText = t.heroTitle;
  elements.heroSub.innerText = t.heroSub;
  elements.heroCta.innerText = t.btnContinueShopping;
  
  // Dynamic collections title
  elements.featuredTitle.innerText = t.featuredProducts;
  elements.sortLabel.innerText = t.sortBy;
  
  // Sorting options
  elements.sortSelect.options[0].text = t.sortPopular;
  
  // Drawer Cart
  elements.cartDrawerTitle.innerText = t.cartTitle;
  elements.cartCheckoutBtn.innerText = t.btnCheckout;
  
  // Checkout Modal Form
  elements.checkoutFormTitle.innerText = t.checkoutTitle;
  elements.checkoutNameLabel.innerText = t.clientName;
  elements.checkoutPhoneLabel.innerText = t.clientPhone;
  elements.checkoutAddressLabel.innerText = t.clientAddress;
  elements.checkoutPayLabel.innerText = t.paymentMethod;
  
  document.getElementById("pay-apple-lbl").innerText = t.payApple;
  document.getElementById("pay-card-lbl").innerText = t.payCard;
  document.getElementById("pay-cod-lbl").innerText = t.payCod;
  elements.checkoutBtnPay.innerText = t.btnPayNow;
  
  // Success Confirmation
  elements.successTitle.innerText = t.orderSuccessTitle;
  elements.successDesc.innerText = t.orderSuccessDesc;
  elements.successReceiptTitle.innerText = t.orderReceipt;
  elements.successBackBtn.innerText = t.btnBackHome;
  
  // Footer
  elements.footerDesc.innerText = t.footerDesc;
  elements.footerContactH.innerText = t.footerContact;
  elements.footerAddressText.innerHTML = `<i class="fas fa-map-marker-alt" style="margin-left: 8px; margin-right: 8px;"></i> ${t.footerAddress}`;
  elements.footerRightsText.innerText = t.footerRights;
  
  // Reload categories & catalog
  renderCategories();
  renderProducts();
  updateCartUI();
  
  // Load structured data SEO JSON-LD in head
  injectSEOStructuredData();
}

// --- SWITCH THEMES ---
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  updateThemeUI();
}

function updateThemeUI() {
  if (state.theme === "dark") {
    elements.body.classList.add("dark-mode");
    elements.themeBtn.innerHTML = `<i class="fas fa-sun"></i> Light Mode`;
  } else {
    elements.body.classList.remove("dark-mode");
    elements.themeBtn.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`;
  }
}

// --- INJECT SEO JSON-LD STRUCTURED DATA SCHEMA ---
function injectSEOStructuredData() {
  const existingScript = document.getElementById("seo-schema-ld");
  if (existingScript) existingScript.remove();
  
  const t = TRANSLATIONS[state.lang];
  
  // Build a structured list of products in JSON-LD schema (no prices)
  const productItemList = PRODUCTS.slice(0, 6).map((prod, idx) => {
    return {
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Product",
        "name": prod.title[state.lang],
        "image": window.location.origin + "/" + prod.image.replace("./", ""),
        "offers": {
          "@type": "Offer",
          "priceCurrency": "QAR",
          "availability": "https://schema.org/InStock"
        }
      }
    };
  });
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": t.featuredProducts,
    "description": t.metaDesc,
    "numberOfItems": PRODUCTS.length,
    "itemListElement": productItemList
  };
  
  const script = document.createElement("script");
  script.id = "seo-schema-ld";
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}

// --- UTILS ---
function showToast(message) {
  elements.toast.querySelector("span").innerText = message;
  elements.toast.classList.add("show");
  
  setTimeout(() => {
    elements.toast.classList.remove("show");
  }, 3500);
}

// Run init on load
window.addEventListener("DOMContentLoaded", init);
