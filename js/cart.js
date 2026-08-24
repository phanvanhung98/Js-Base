import { products } from "./data.js";
import {
  createCartItemTemplate,
  createEmptyCartTemplate,
} from "./templates.js";
import { formatMoney, select, showToast } from "./utils.js";

const CART_STORAGE_KEY = "cart";

function loadCart() {
  try {
    const savedCart = JSON.parse(
      localStorage.getItem(CART_STORAGE_KEY) || "[]",
    );

    if (!Array.isArray(savedCart)) {
      return [];
    }

    return savedCart
      .map((item) => ({
        id: Number(item.id),
        quantity: Number(item.quantity || item.qty || 1),
      }))
      .filter((item) => {
        const productExists = products.some(
          (product) => product.id === item.id,
        );

        return productExists && item.quantity > 0;
      });
  } catch (error) {
    
    console.warn("Không thể đọc dữ liệu giỏ hàng:", error);
    return [];
  }
}

export function initializeCart() {
  let basket = loadCart();

  function getSize() {
    return basket.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

  function getTotalPrice() {
    return basket.reduce((total, item) => {
      const product = products.find(
        (product) => product.id === item.id,
      );

      return total + product.price * item.quantity;
    }, 0);
  }

  function renderCart() {
    select("#cartCount").textContent = getSize();
    select("#total").textContent = formatMoney(getTotalPrice());

    if (basket.length === 0) {
      select("#cartItems").innerHTML = createEmptyCartTemplate();
      return;
    }

    select("#cartItems").innerHTML = basket
      .map((item) => {
        const product = products.find(
          (product) => product.id === item.id,
        );

        return createCartItemTemplate(product, item.quantity);
      })
      .join("");
  }

  function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(basket));
    renderCart();
  }

  function addProduct(productId, quantity = 1) {
    const product = products.find((product) => product.id === productId);

    if (!product) {
      showToast("Không tìm thấy sản phẩm");
      return;
    }

    const basketItem = basket.find((item) => item.id === productId);

    if (basketItem) {
      basketItem.quantity += quantity;
    } else {
      basket.push({
        id: productId,
        quantity,
      });
    }

    saveCart();
    showToast("Đã thêm sản phẩm vào giỏ hàng");
  }

  function changeQuantity(productId, amount) {
    const basketItem = basket.find((item) => item.id === productId);

    if (!basketItem) return;

    basketItem.quantity += amount;

    if (basketItem.quantity < 1) {
      basket = basket.filter((item) => item.id !== productId);
    }

    saveCart();
  }

  function removeProduct(productId) {
    basket = basket.filter((item) => item.id !== productId);
    saveCart();
  }

  select("#cartItems").addEventListener("click", (event) => {
    const changeButton = event.target.closest("[data-change]");
    const removeButton = event.target.closest("[data-remove]");

    if (changeButton) {
      changeQuantity(
        Number(changeButton.dataset.id),
        Number(changeButton.dataset.change),
      );
    }

    if (removeButton) {
      removeProduct(Number(removeButton.dataset.remove));
    }
  });

  renderCart();

  return {
    addProduct,
    getSize,
  };
}
