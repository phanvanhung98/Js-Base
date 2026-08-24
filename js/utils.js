export function select(selector) {
  return document.querySelector(selector);
}

export function formatMoney(value) {
  return value.toLocaleString("vi-VN") + "đ";
}

export function showToast(message) {
  const toast = select("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}
