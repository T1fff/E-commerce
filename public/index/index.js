import cartController from "../../app/controllers/cart-controller.js";
import orderController from "../../app/controllers/order-controller.js";
import productViewController from "../../app/controllers/product-view-controller.js";
import productsController from "../../app/controllers/products-controller.js";
import searchController from "../../app/controllers/search-controller.js";
import paginationController from "../../app/controllers/pagination-controller.js";
import loginController from "../../app/controllers/login-controller";


try {
    const products = new productsController();
  } catch (error) {
    console.error('Error en el controlador de productos:', error);
  }
  
  try {
    const cart = new cartController();
  } catch (error) {
    console.error('Error en el controlador de carrito:', error);
  }
  
  try {
    const productView = new productViewController();
  } catch (error) {
    console.error('Error en el controlador de vista de producto:', error);
  }
  
  try {
    const search = new searchController();
  } catch (error) {
    console.error('Error en el controlador de búsqueda:', error);
  }
  
  try {
    const order = new orderController();
  } catch (error) {
    console.error('Error en el controlador de pedido:', error);
  }
  
  try {
    const pagination = new paginationController();
  } catch (error) {
    console.error('Error en el controlador de paginación:', error);
  }
  
  try {
    const login = new loginController();
  } catch (error) {
    console.error('Error en el controlador de inicio de sesión:', error);
  }

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

