import { initializeCart } from "./cart.js";
import { products } from "./data.js";
import { formatMoney, select, showToast } from "./utils.js";

const searchParameters = new URLSearchParams(location.search);
const productId = Number(searchParameters.get("id")) || 1;
const product = products.find((item) => item.id === productId) || products[0];
const cart = initializeCart();

document.title = `${product.name} - MiniShop`;
select("#breadcrumbName").textContent = product.name;
select("#productCategory").textContent = product.category;
select("#productName").textContent = product.name;
select("#productPrice").textContent = formatMoney(product.price);
select("#productImage").src = product.image;
select("#productImage").alt = product.name;

select("#addDetailToCart").addEventListener("click", () => {
  const quantity = Number(select("#quantity").value);
  cart.addProduct(product.id, quantity);
});

select("#openCart").addEventListener("click", () => {
  select("#cart").classList.add("open");
  select("#overlay").classList.add("show");
});

function closeCart() {
  select("#cart").classList.remove("open");
  select("#overlay").classList.remove("show");
}

select("#closeCart").addEventListener("click", closeCart);
select("#overlay").addEventListener("click", closeCart);

select("#checkout").addEventListener("click", () => {
  const message = cart.getSize()
    ? "Tính năng thanh toán đang được hoàn thiện!"
    : "Giỏ hàng đang trống";

  showToast(message);
});
