const URL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const API = `${URL}/categories`;
  const response = await fetch(API);
  const result = await response.json();
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const API = `${URL}/search?category=${categoryId}&q=${query}`;
  const response = await fetch(API);
  const result = await response.json();
  return result;
}

export async function getProductById(productId) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  const API = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(API);
  const result = await response.json();
  return result;
}
