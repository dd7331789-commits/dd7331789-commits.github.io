const money = (n) => new Intl.NumberFormat("vi-VN").format(n) + "đ";

// ===== Render products =====
const products = window.PRODUCTS || [];
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");

function matchesPrice(product, mode){
  const p = product.price;
  if(mode === "low") return p < 1500000;
  if(mode === "mid") return p >= 1500000 && p <= 2500000;
  if(mode === "high") return p > 2500000;
  return true;
}

function render(list){
  grid.innerHTML = "";
  list.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card__img">
        <img src="${prod.img}" alt="${prod.name}">
      </div>
      <div class="card__body">
        <div class="card__title">${prod.name}</div>
        <div class="card__meta">${prod.category}</div>

        <div class="priceRow">
          <div class="price">${money(prod.price)}</div>
          <div class="small text-muted">Giá niêm yết</div>
        </div>

        <div class="card__actions">
          <button class="card__btn" data-add="${prod.id}">+ Thêm vào giỏ</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function applyFilters(){
  const q = (searchInput?.value || "").trim().toLowerCase();
  const mode = priceFilter?.value || "all";

  const list = products.filter(p => {
    const okSearch = !q || p.name.toLowerCase().includes(q);
    const okPrice = matchesPrice(p, mode);
    return okSearch && okPrice;
  });

  render(list);
}

applyFilters();

searchInput?.addEventListener("input", applyFilters);
priceFilter?.addEventListener("change", applyFilters);

// ===== Cart logic =====
const cartDrawer = document.getElementById("cartDrawer");
const cartOpenBtn = document.getElementById("cartOpenBtn");
const cartCloseBtn = document.getElementById("cartCloseBtn");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartCountEl = document.getElementById("cartCount");
const cartTotalEl = document.getElementById("cartTotal");
const checkoutBtn = document.getElementById("checkoutBtn");

let cart = {}; // {id: qty}

function openCart(){
  cartDrawer.classList.add("show");
  cartDrawer.setAttribute("aria-hidden", "false");
}
function closeCart(){
  cartDrawer.classList.remove("show");
  cartDrawer.setAttribute("aria-hidden", "true");
}

cartOpenBtn?.addEventListener("click", openCart);
cartCloseBtn?.addEventListener("click", closeCart);
cartBackdrop?.addEventListener("click", closeCart);

function getProductById(id){
  return products.find(p => p.id === id);
}

function calcCount(){
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}
function calcTotal(){
  let total = 0;
  for(const [id, qty] of Object.entries(cart)){
    const prod = getProductById(id);
    if(prod) total += prod.price * qty;
  }
  return total;
}

function renderCart(){
  const ids = Object.keys(cart);
  cartItemsEl.innerHTML = "";

  const count = calcCount();
  cartCountEl.textContent = count;

  const total = calcTotal();
  cartTotalEl.textContent = money(total);

  if(ids.length === 0){
    cartEmptyEl.style.display = "block";
    cartItemsEl.style.display = "none";
    return;
  }
  cartEmptyEl.style.display = "none";
  cartItemsEl.style.display = "block";

  ids.forEach(id => {
    const prod = getProductById(id);
    const qty = cart[id];
    const line = prod.price * qty;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <div class="cart-thumb">
        <img src="${prod.img}" alt="${prod.name}">
      </div>
      <div>
        <h4>${prod.name}</h4>
        <div class="cat">${prod.category}</div>
        <div class="qtyRow">
          <button class="qtyBtn" data-dec="${id}">-</button>
          <div class="qtyNum">SL: ${qty}</div>
          <button class="qtyBtn" data-inc="${id}">+</button>
        </div>
      </div>
      <div class="linePrice">${money(line)}</div>
    `;
    cartItemsEl.appendChild(row);
  });
}

renderCart();

grid.addEventListener("click", (e) => {
  const addId = e.target?.dataset?.add;
  if(addId){
    cart[addId] = (cart[addId] || 0) + 1;
    renderCart();
    openCart();
  }
});

cartItemsEl.addEventListener("click", (e) => {
  const incId = e.target?.dataset?.inc;
  const decId = e.target?.dataset?.dec;

  if(incId){
    cart[incId] = (cart[incId] || 0) + 1;
    renderCart();
  }
  if(decId){
    cart[decId] = (cart[decId] || 0) - 1;
    if(cart[decId] <= 0) delete cart[decId];
    renderCart();
  }
});

checkoutBtn?.addEventListener("click", () => {
  const total = calcTotal();
  if(total === 0){
    alert("Giỏ hàng trống!");
    return;
  }
  alert("Demo thanh toán! Tổng đơn: " + money(total));
});

// ===== Contact form (demo) =====
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  formNote.textContent = "Cảm ơn bạn! (Demo) Mình sẽ liên hệ sớm.";
  contactForm.reset();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();