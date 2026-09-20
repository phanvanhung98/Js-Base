import { initializeCart } from "./cart.js";
import { initializeInterface } from "./interface.js";
import { initializeProducts } from "./products.js";
import "./if_else_toan_tu.js";
import "./switch_case.js";
import "./function.js";

const cart = initializeCart();

initializeProducts(cart.addProduct);
initializeInterface(cart.getSize);
