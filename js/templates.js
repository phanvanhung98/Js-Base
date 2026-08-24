import { formatMoney } from "./utils.js";

function cartSvg() {
  return `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 7H6"></path>
      <circle cx="9" cy="20" r="1.5"></circle>
      <circle cx="18" cy="20" r="1.5"></circle>
    </svg>
  `;
}

export function createEmptyCartTemplate() {
  return `
    <div class="empty-cart">
      <span class="empty-cart-icon">
        ${cartSvg()}
      </span>
      <p>Giỏ hàng đang trống</p>
      <small>Hãy thêm sản phẩm bạn yêu thích nhé!</small>
    </div>
  `;
}

export function createCartItemTemplate(product, quantity) {
  return `
    <div class="cart-item">
      <img src="${product.image}" alt="${product.name}">

      <div>
        <h4>${product.name}</h4>
        <small>${formatMoney(product.price)}</small>

        <div class="qty">
          <button
            data-change="-1"
            data-id="${product.id}"
            aria-label="Giảm số lượng ${product.name}"
          >
            −
          </button>

          <span>${quantity}</span>

          <button
            data-change="1"
            data-id="${product.id}"
            aria-label="Tăng số lượng ${product.name}"
          >
            +
          </button>
        </div>
      </div>

      <button
        class="remove"
        data-remove="${product.id}"
        aria-label="Xóa ${product.name} khỏi giỏ hàng"
      >
        ×
      </button>
    </div>
  `;
}
