import { select, showToast } from "./utils.js";

function toggleCart(isOpen) {
  select("#cart").classList.toggle("open", isOpen);
  select("#overlay").classList.toggle("show", isOpen);
}

export function initializeInterface(getCartSize) {
  select("#openCart").addEventListener("click", () => toggleCart(true));
  select("#closeCart").addEventListener("click", () => toggleCart(false));
  select("#overlay").addEventListener("click", () => toggleCart(false));

  select("#checkout").addEventListener("click", () => {
    const message = getCartSize()
      ? "Tính năng thanh toán đang được hoàn thiện!"
      : "Giỏ hàng đang trống";
    showToast(message);
  });

  select("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("Đăng ký thành công!");
    event.target.reset();
  });
}
