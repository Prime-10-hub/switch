// ===== CART SETUP =====
let cart = [];

// ===== ADD TO CART =====
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCounter();
    renderCartItems();
    showNotification(name);
}

// ===== REMOVE FROM CART =====
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCounter();
    renderCartItems();
}

// ===== UPDATE CART COUNTER =====
function updateCartCounter() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.textContent = `🛒 Cart (${cart.length})`;
}

// ===== RENDER CART ITEMS IN SIDEBAR =====
function renderCartItems() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
        totalEl.textContent = 'UGX 0';
        return;
    }

    let total = 0;
    container.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">UGX ${item.price.toLocaleString()}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">✕</button>
            </div>
        `;
    }).join('');

    totalEl.textContent = `UGX ${total.toLocaleString()}`;
}

// ===== OPEN CART =====
function openCart() {
    document.querySelector('.cart-sidebar').classList.add('open');
    document.querySelector('.cart-overlay').classList.add('open');
}

// ===== CLOSE CART =====
function closeCart() {
    document.querySelector('.cart-sidebar').classList.remove('open');
    document.querySelector('.cart-overlay').classList.remove('open');
}

// ===== SHOW NOTIFICATION =====
function showNotification(name) {
    const note = document.createElement('div');
    note.textContent = `✅ ${name} added to cart!`;
    note.style.cssText = `
        position: fixed;
        top: 80px;
        right: 24px;
        background: #6c63ff;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 2500);
}

// ===== WHATSAPP CHECKOUT =====
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let message = "Hello! I'd like to order:\n";
    let total = 0;

    cart.forEach(item => {
        message += `- ${item.name} (UGX ${item.price.toLocaleString()})\n`;
        total += item.price;
    });

    message += `\nTotal: UGX ${total.toLocaleString()}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/256700000000?text=${encoded}`, '_blank');
}

// ===== MAKE CART ICON CLICKABLE =====
document.querySelector('.cart-icon').addEventListener('click', openCart);