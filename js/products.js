import { products } from "./data.js";
import { select } from "./utils.js";

let selectedCategory = "Tất cả";

function renderFilters() {
  const categories = [
    "Tất cả",
    ...new Set(products.map((product) => product.category)),
  ];

  select("#filters").innerHTML = categories
    .map((category) => {
      const activeClass = category === selectedCategory ? "active" : "";

      return `
        <button class="${activeClass}" data-category="${category}">
          ${category}
        </button>
      `;
    })
    .join("");
}

function filterProducts() {
  const keyword = select("#search").value.toLowerCase().trim();
  const productCards = document.querySelectorAll("#grid .card");
  let visibleProductCount = 0;

  productCards.forEach((card) => {
    const productName = card.dataset.name.toLowerCase();
    const productCategory = card.dataset.category;
    const matchesKeyword = productName.includes(keyword);
    const matchesCategory =
      selectedCategory === "Tất cả" ||
      productCategory === selectedCategory;
    const shouldDisplay = matchesKeyword && matchesCategory;

    card.style.display = shouldDisplay ? "block" : "none";

    if (shouldDisplay) {
      visibleProductCount += 1;
    }
  });

  select("#empty").style.display = visibleProductCount ? "none" : "block";
}

export function initializeProducts(onAddToCart) {
  renderFilters();
  filterProducts();

  select("#filters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");

    if (!button) return;

    selectedCategory = button.dataset.category;
    renderFilters();
    filterProducts();
  });

  select("#grid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");

    if (button) {
      onAddToCart(Number(button.dataset.add));
    }
  });

  select("#search").addEventListener("input", filterProducts);
}
